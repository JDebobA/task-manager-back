import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { PrismaService } from 'src/prisma/prisma.service'

import { AuthDto, UserDto } from './user.dto'

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async getById(id: string) {
		return this.prisma.user.findUnique({
			where: { id },
			include: { task: true }
		})
	}

	async getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email }
		})
	}

	async create(dto: AuthDto) {
		return this.prisma.user.create({
			data: {
				email: dto.email,
				password: await hash(dto.password),
				name: ''
			}
		})
	}

	async update(id: string, dto: UserDto) {
		if (dto.password) {
			dto.password = await hash(dto.password)
		}
		return this.prisma.user.update({
			where: { id },
			data: dto,
			select: {
				name: true,
				email: true
			}
		})
	}

	// async getProfile() {}
}
