import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { verify } from 'argon2'
import { Response } from 'express'
import { UserService } from 'src/user/user.service'

import { AuthDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
	EXPIRE_DAY_REFRESH_TOKEN = 1
	REFRESH_TOKEN_NAME = 'refreshToken'

	constructor(
		private jwt: JwtService,
		private userService: UserService
	) {}

	// Проверяет email/пароль пользователя и выдает новую пару токенов.
	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)

		const { password, ...userWithoutPassword } = user
		const tokens = this.issueTokens(userWithoutPassword.id)

		return {
			user: userWithoutPassword,
			...tokens
		}
	}

	// Создает нового пользователя и сразу возвращает токены для входа.
	async register(dto: AuthDto) {
		const oldUser = await this.userService.getByEmail(dto.email)
		if (oldUser) throw new BadRequestException(`User already exists`)

		const user = await this.userService.create(dto)

		const { password, ...userWithoutPassword } = user
		const tokens = this.issueTokens(userWithoutPassword.id)

		return {
			user: userWithoutPassword,
			...tokens
		}
	}

	// Проверяет refresh token, находит пользователя и выдает обновленные токены.
	async getNewTokens(refreshToken: string) {
		const result = await this.jwt.verifyAsync(refreshToken)
		if (!result) throw new UnauthorizedException('Invalid refresh token')

		const user = await this.userService.getById(result.id)

		if (!user) {
			throw new NotFoundException('User not found')
		}

		const { password, ...userWithoutPassword } = user
		const tokens = this.issueTokens(userWithoutPassword.id)

		return {
			user: userWithoutPassword,
			...tokens
		}
	}

	// Генерирует access и refresh токены по идентификатору пользователя.
	private issueTokens(userId: string) {
		const data = { id: userId }

		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h'
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7d'
		})

		return { accessToken, refreshToken }
	}

	// Валидирует пользователя: проверяет наличие аккаунта и корректность пароля.
	private async validateUser(dto: AuthDto) {
		const user = await this.userService.getByEmail(dto.email)

		if (!user) throw new NotFoundException(`User not found`)

		const isValid = await verify(user.password, dto.password)

		if (!isValid) throw new UnauthorizedException('Invalid password')

		return user
	}

	// Сохраняет refresh token в httpOnly cookie для безопасного обновления сессии.
	addRefreshTokenToResponse(res: Response, refreshToken: string) {
		const expiresIn = new Date()
		expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN)

		res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
			httpOnly: true,
			domain: 'localhost',
			expires: expiresIn,
			secure: true,
			sameSite: 'none'
		})
	}

	// Сбрасывает refresh token в cookie, чтобы завершить пользовательскую сессию.
	removeRefreshTokenFromResponse(res: Response) {
		res.cookie(this.REFRESH_TOKEN_NAME, '', {
			httpOnly: true,
			domain: 'localhost',
			expires: new Date(0),
			secure: true,
			sameSite: 'none'
		})
	}
}
