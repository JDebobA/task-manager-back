import { createParamDecorator, ExecutionContext } from '@nestjs/common'

import { User } from '@/../prisma/generated/client'

// Декоратор для получения текущего пользователя или его поля из req.user.
export const CurrentUser = createParamDecorator(
	(data: keyof User, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest()
		const user = request.user

		return data ? user[data] : user
	}
)
