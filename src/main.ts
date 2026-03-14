import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

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

	await app.listen(config.getOrThrow<number>('PORT') ?? 3000)
}
bootstrap()
