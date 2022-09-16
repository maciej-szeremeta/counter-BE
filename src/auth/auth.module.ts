import { Module, forwardRef, } from '@nestjs/common';
import { MailModule, } from '../mail/mail.module';
import { AuthController, } from './auth.controller';
import { AuthService, } from './auth.service';
import { JwtStrategy, } from './strategy/jwt.strategy';

@Module({
  imports:[ forwardRef(() =>  
    MailModule), ],
  controllers: [ AuthController, ],
  providers: [ AuthService, JwtStrategy, ],
  exports: [ JwtStrategy, ],
})
export class AuthModule {}
