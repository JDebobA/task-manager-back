import { Injectable, NotFoundException } from '@nestjs/common'
import { hash } from 'argon2'
import { startOfDay, subDays } from 'date-fns'
import { PrismaService } from 'src/prisma/prisma.service'

import { AuthDto, UserDto } from './user.dto'

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	// Ищет пользователя по id вместе с его задачами.
	async getById(id: string) {
		return this.prisma.user.findUnique({
			where: { id },
			include: { task: true }
		})
	}

	// Ищет пользователя по email для проверки уникальности и авторизации.
	async getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email }
		})
	}

	// Создает нового пользователя и хеширует пароль перед сохранением.
	async create(dto: AuthDto) {
		return this.prisma.user.create({
			data: {
				email: dto.email,
				password: await hash(dto.password),
				name: ''
			}
		})
	}

	// Обновляет профиль пользователя; пароль дополнительно хешируется при изменении.
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

	// Собирает публичный профиль пользователя и статистику по задачам.
	async getProfile(id: string) {
		const profile = await this.getById(id)

		if (!profile) {
			throw new NotFoundException(`User with id ${id} not found`)
		}

		const totalTasks = profile.task.length

		const completedTasks = await this.prisma.task.count({
			where: {
				userId: id,
				isCompleted: true
			}
		})

		const todayStart = startOfDay(new Date())
		const weekStart = startOfDay(subDays(new Date(), 7))

		const todayTasks = await this.prisma.task.count({
			where: {
				userId: id,
				createdAt: {
					gte: todayStart.toISOString()
				}
			}
		})

		const weekTasks = await this.prisma.task.count({
			where: {
				userId: id,
				createdAt: {
					gte: weekStart.toISOString()
				}
			}
		})

		//eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...rest } = profile

		return {
			user: rest,
			statistics: [
				{ label: 'Total', value: totalTasks },
				{ label: 'Completed ', value: completedTasks },
				{ label: 'Today tasks', value: todayTasks },
				{ label: 'Week tasks', value: weekTasks }
			]
		}
	}
}
