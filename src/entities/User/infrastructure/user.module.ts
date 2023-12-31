import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import UserController from './user.controller';
import UserService from '../application/user.service';
import PrismaModule from 'src/prisma/prisma.module';
import { VerifyAdminMiddleware } from 'src/middlewares/verify/VerifyAdmin';

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  controllers: [UserController],
})
export default class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyAdminMiddleware)
      .forRoutes({ path: 'users/:id', method: RequestMethod.POST });
  }
}
