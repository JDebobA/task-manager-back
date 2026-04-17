import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

import { TaskDto } from './task.dto'

@Injectable()
export class TaskService {
	constructor(private prisma: PrismaService) {}

	async getALL(userId: string) {
		return this.prisma.task.findMany({
			where: {
				userId
			},
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	async create(dto: TaskDto, userId: string) {
		// Проверяем, что name передан
		if (!dto.name) {
			throw new Error('Task name is required')
		}

		const data: any = {
			name: dto.name, // Обязательное поле
			user: {
				connect: {
					id: userId
				}
			}
		}

		if (dto.isCompleted !== undefined) data.isCompleted = dto.isCompleted
		if (dto.createdAt !== undefined) data.createdAt = dto.createdAt
		if (dto.priority !== undefined) data.priority = dto.priority

		return this.prisma.task.create({
			data
		})
	}

	async update(dto: Partial<TaskDto>, taskId: string, userId: string) {
		// Сначала проверяем, существует ли задача и принадлежит ли пользователю
		const existingTask = await this.prisma.task.findFirst({
			where: {
				id: taskId,
				userId
			}
		})

		if (!existingTask) {
			throw new NotFoundException('Task not found or access denied')
		}

		// Подготавливаем данные для обновления
		const data: any = {}

		if (dto.name !== undefined) data.name = dto.name
		if (dto.isCompleted !== undefined) data.isCompleted = dto.isCompleted
		if (dto.createdAt !== undefined) data.createdAt = dto.createdAt
		if (dto.priority !== undefined) data.priority = dto.priority

		return this.prisma.task.update({
			where: {
				id: taskId
			},
			data
		})
	}

	async delete(taskId: string, userId: string) {
		// Сначала проверяем, существует ли задача и принадлежит ли пользователю
		const existingTask = await this.prisma.task.findFirst({
			where: {
				id: taskId,
				userId
			}
		})

		if (!existingTask) {
			throw new NotFoundException('Task not found or access denied')
		}

		return this.prisma.task.delete({
			where: {
				id: taskId
			}
		})
	}
}
