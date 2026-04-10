import {
	IsEmail,
	IsNumber,
	IsOptional,
	IsString,
	Max,
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
	@Max(10)
	intervalCount?: number
}

export class UserDto extends PomodoroSettingsDto {
	@IsEmail()
	email: string

	@IsOptional()
	@IsString()
	name?: string

	@MinLength(6, {
		message: 'Password must be at least 6 characters long'
	})
	@IsString()
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
