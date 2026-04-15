import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

import { TaskDto } from './task.dto'

@Injectable()
export class TaskService {
	constructor(private prisma: PrismaService) {}

	async getALL(userId: string) {
		return this.prisma.task.findMany({
			where: {
				userId
			}
		})
	}

	async create(dto: TaskDto, userId: string) {
		// Убираем undefined поля
		const data: any = {
			user: {
				connect: {
					id: userId
				}
			}
		}

		if (dto.name !== undefined) data.name = dto.name
		if (dto.isCompleted !== undefined) data.isCompleted = dto.isCompleted
		if (dto.createdAt !== undefined) data.createdAt = dto.createdAt
		if (dto.priority !== undefined) data.priority = dto.priority

		return this.prisma.task.create({
			data
		})
	}

	async update(dto: Partial<TaskDto>, taskId: string, userId: string) {
		// Убираем undefined поля
		const data: any = {}

		if (dto.name !== undefined) data.name = dto.name
		if (dto.isCompleted !== undefined) data.isCompleted = dto.isCompleted
		if (dto.createdAt !== undefined) data.createdAt = dto.createdAt
		if (dto.priority !== undefined) data.priority = dto.priority

		return this.prisma.task.update({
			where: {
				userId,
				id: taskId
			},
			data
		})
	}

	async delete(taskId: string) {
		return this.prisma.task.delete({
			where: {
				id: taskId
			}
		})
	}
}
