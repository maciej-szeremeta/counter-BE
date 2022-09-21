import { Module, } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions, } from '@nestjs/typeorm';
import { ORM_CONFIG, } from 'ormconfig.autosync';
import { AppController, } from './app.controller';
import { AppService, } from './app.service';
import { AuthModule, } from './auth/auth.module';
import { UserModule, } from './user/user.module';

@Module({
  imports: [ TypeOrmModule.forRoot(ORM_CONFIG as TypeOrmModuleOptions), UserModule, AuthModule, ],
  controllers: [ AppController, ],
  providers: [ AppService,],
})
export class AppModule {}
