import {
	IsEmail,
	IsNumber,
	IsOptional,
	IsString,
	Min,
	MinLength
} from 'class-validator'

export class PomodoroSettingsDto {
	@IsOptional()
	@IsNumber()
	@Min(1)
	workInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	breakInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	intervalsCount?: number
}

export class UserDto extends PomodoroSettingsDto {
	@IsOptional()
	@IsString()
	@MinLength(2)
	name?: string

	@IsEmail()
	email: string

	@IsString()
	@MinLength(5, { message: 'Ваш пароль слишком слабый, иди качай его' })
	password: string
}

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(5, {
		message: 'Ваш пароль слишком маленький, иди растишку кушай'
	})
	@IsString()
	password: string
}
