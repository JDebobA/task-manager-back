import {
	Injectable,
	Logger,
	OnModuleDestroy,
	OnModuleInit
} from '@nestjs/common'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from 'prisma/generated/client'

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	private readonly logger = new Logger(PrismaService.name)

	public constructor() {
		// Правильный способ - передать объект с полем url
		const adapter = new PrismaBetterSqlite3({
			url: process.env.DATABASE_URL ?? 'file:./dev.db'
		})
		
		super({ adapter })
	}

	public async onModuleInit() {
		const start = Date.now()

		this.logger.log('Соединение с базой данных...')

		try {
			await this.$connect()

			const msDatabaseConnecting = Date.now() - start

			this.logger.log(
				`База данных успешно подключена. Время подключения: ${msDatabaseConnecting} ms`
			)
		} catch (error) {
			this.logger.error(`Ошибка подключения к базе данных: ${error}`)

			throw error
		}
	}

	public async onModuleDestroy() {
		this.logger.log('Отключения от базы данных...')

		try {
			await this.$disconnect()

			this.logger.log('Соединение с базой данных закрыто')
		} catch (error) {
			this.logger.error(`Ошибка отключения от базы данных: ${error}`)

			throw error
		}
	}
}