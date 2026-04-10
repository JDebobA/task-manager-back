import { UseGuards } from '@nestjs/common'

import { JwtAuthGuard } from '../guards/jwt.guard'

// Кастомный декоратор для защиты роутов через JWT guard.
export const Auth = () => UseGuards(JwtAuthGuard)
