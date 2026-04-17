import { Transform } from 'class-transformer'
import {
	IsBoolean,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString
} from 'class-validator'
import { Priority } from 'prisma/generated/client'

export class TaskDto {
	@IsString()
	@IsNotEmpty({ message: 'Task name is required' }) // ← Добавлено: name обязательное поле
	name: string // ← убран IsOptional

	@IsBoolean()
	@IsOptional()
	isCompleted?: boolean

	@IsString()
	@IsOptional()
	createdAt?: string

	@IsEnum(Priority)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toLowerCase())
	priority?: Priority
}
