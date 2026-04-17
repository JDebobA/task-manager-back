import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

import { TimeBlockDto } from './dto/time-block.dto'

@Injectable()
export class TimeBlockService {
	constructor(private prisma: PrismaService) {}

	async getALL(userId: string) {
		return this.prisma.timeBlock.findMany({
			where: {
				userId
			},
			orderBy: {
				order: 'asc'
			}
		})
	}

	async create(dto: TimeBlockDto, userId: string) {
		const data: any = {
			user: {
				connect: {
					id: userId
				}
			}
		}

		if (dto.name !== undefined) data.name = dto.name
		if (dto.color !== undefined) data.color = dto.color
		if (dto.duration !== undefined) data.duration = dto.duration
		if (dto.order !== undefined) data.order = dto.order

		return this.prisma.timeBlock.create({
			data
		})
	}

	async update(
		dto: Partial<TimeBlockDto>,
		timeBlockId: string,
		userId: string
	) {
		// Сначала проверяем, существует ли блок и принадлежит ли пользователю
		const existingBlock = await this.prisma.timeBlock.findFirst({
			where: {
				id: timeBlockId,
				userId
			}
		})

		if (!existingBlock) {
			throw new NotFoundException('Time block not found or access denied')
		}

		const data: any = {}

		if (dto.name !== undefined) data.name = dto.name
		if (dto.color !== undefined) data.color = dto.color
		if (dto.duration !== undefined) data.duration = dto.duration
		if (dto.order !== undefined) data.order = dto.order

		return this.prisma.timeBlock.update({
			where: {
				id: timeBlockId
			},
			data
		})
	}

	async delete(timeBlockId: string, userId: string) {
		// Сначала проверяем, существует ли блок и принадлежит ли пользователю
		const existingBlock = await this.prisma.timeBlock.findFirst({
			where: {
				id: timeBlockId,
				userId
			}
		})

		if (!existingBlock) {
			throw new NotFoundException('Time block not found or access denied')
		}

		return this.prisma.timeBlock.delete({
			where: {
				id: timeBlockId
			}
		})
	}

	async updateOrder(ids: string[]) {
		return this.prisma.$transaction(
			ids.map((id, order) =>
				this.prisma.timeBlock.update({
					where: { id },
					data: { order }
				})
			)
		)
	}
}
