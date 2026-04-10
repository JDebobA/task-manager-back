import { AuthGuard } from '@nestjs/passport'

// Guard, который включает стратегию 'jwt' для проверки защищенных маршрутов.
export class JwtAuthGuard extends AuthGuard('jwt') {}
