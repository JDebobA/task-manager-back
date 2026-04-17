import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'

// ← ДОБАВЬТЕ ЭТУ СТРОКУ

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// ← ДОБАВЬТЕ ЭТУ СТРОКУ (после создания app)
	app.use(cookieParser.default())

	app.setGlobalPrefix('api')
	app.enableCors({
		origin: ['http://localhost:3000'],
		credentials: true
	})

	const configSwagger = new DocumentBuilder()
		.setTitle('API')
		.setDescription('Документация API')
		.setVersion('1.0')
		.build()

	const document = SwaggerModule.createDocument(app, configSwagger)
	SwaggerModule.setup('api-docs', app, document)

	const config = app.get(ConfigService)
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true
		})
	)

	// ДОБАВЬТЕ ЭТО - устанавливаем таймаут для сервера
	const server = app.getHttpServer()
	server.setTimeout(120000) // 120 секунд (2 минуты)
	server.keepAliveTimeout = 120000 // Таймаут keep-alive

	await app.listen(config.getOrThrow<number>('PORT') ?? 3000)

	console.log(
		`Сервер запущен на порту ${config.getOrThrow<number>('PORT') ?? 3000}`
	)
	console.log(
		`Документация Swagger: http://localhost:${config.getOrThrow<number>('PORT') ?? 3000}/api-docs`
	)
}
bootstrap()
