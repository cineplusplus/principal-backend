import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configurations';
import UserModule from './entities/User/infrastructure/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
