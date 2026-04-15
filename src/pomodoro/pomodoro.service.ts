import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

import { PomodoroRoundDto, PomodoroSessionDto } from './pomodoro.dto'

@Injectable()
export class PomodoroService {
	constructor(private prisma: PrismaService) {}

	async getTodaySessions(userId: string) {
		const today = new Date()
		today.setHours(0, 0, 0, 0)

		const tomorrow = new Date(today)
		tomorrow.setDate(tomorrow.getDate() + 1)

		return this.prisma.pomodoroSession.findFirst({
			where: {
				createdAt: {
					gte: today,
					lt: tomorrow
				},
				userId
			},
			include: {
				rounds: {
					orderBy: {
						id: 'asc'
					}
				}
			}
		})
	}

	async create(userId: string) {
		const todaySession = await this.getTodaySessions(userId)

		if (todaySession) return todaySession

		const user = await this.prisma.user.findUnique({
			where: {
				id: userId
			},
			select: {
				intervalCount: true
			}
		})

		if (!user) throw new NotFoundException(`User not found`)

		const intervalCount = user.intervalCount || 4

		return this.prisma.pomodoroSession.create({
			data: {
				rounds: {
					createMany: {
						data: Array.from({ length: intervalCount }, () => ({
							totalSeconds: 0
						}))
					}
				},
				user: {
					connect: {
						id: userId
					}
				}
			},
			include: {
				rounds: true
			}
		})
	}

	async update(
		dto: Partial<PomodoroSessionDto>,
		pomodoroId: string,
		userId: string
	) {
		return this.prisma.pomodoroSession.update({
			where: {
				userId,
				id: pomodoroId
			},
			data: dto
		})
	}

	async updateRound(dto: Partial<PomodoroRoundDto>, roundId: string) {
		const cleanData: any = {}

		if (dto.totalSeconds !== undefined && dto.totalSeconds !== null) {
			cleanData.totalSeconds = dto.totalSeconds
		}
		if (dto.isComplete !== undefined && dto.isComplete !== null) {
			cleanData.isComplete = dto.isComplete
		}

		return this.prisma.pomodoroRound.update({
			where: {
				id: roundId
			},
			data: cleanData
		})
	}

	async deleteSession(sessionId: string, userId: string) {
		return this.prisma.pomodoroSession.delete({
			where: {
				id: sessionId,
				userId
			}
		})
	}
}
