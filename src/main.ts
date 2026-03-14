import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const config = app.get(ConfigService)
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true
		})
	)

	await app.listen(process.env.PORT ?? 3000)
	await app.listen(config.getOrThrow<number>('PORT') ?? 3000)
}
bootstrap()
