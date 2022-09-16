import { Module, } from '@nestjs/common';
import { MailService, } from './mail.service';
import mailerconfig = require('../mailerconfig')
import { MailerModule, } from '@nestjs-modules/mailer';

@Module({
  imports:[ MailerModule.forRoot(mailerconfig), ],
  controllers: [ ],
  providers: [ MailService, ],
  exports:[ MailService, ],
})
export class MailModule {}
