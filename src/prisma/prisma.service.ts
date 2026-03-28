import {
	Injectable,
	Logger,
	OnModuleDestroy,
	OnModuleInit
} from '@nestjs/common'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import { PrismaClient } from 'prisma/generated/client'

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	private readonly logger = new Logger(PrismaService.name)

	public constructor() {
		const pool = new Pool({
			connectionString: process.env.DATABASE_URL
		})

		//@ts-ignore
		const adapter = new PrismaPg(pool)

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
