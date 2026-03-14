import { Injectable } from '@nestjs/common'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'
import { PrismaClient } from 'generated/prisma/client'

@Injectable()
export class PrismaService extends PrismaClient {
	constructor() {
		const connectionString = `${process.env.POSTGRES_URI}`
		const adapter = new PrismaPg({ connectionString })
		super({ adapter })
	}
}
