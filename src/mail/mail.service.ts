import { Injectable, } from '@nestjs/common';
import { MailerService, } from '@nestjs-modules/mailer';

interface confirmMail{
  role: string,
  userId: string,
  tokenId: string
}
type resetPwdMail = confirmMail;

interface Mail{
  email: string;
}
@Injectable()
export class MailService {

  constructor(private readonly mailService: MailerService) { }
   
  async confirmMail(to: string, subject: string, template: string, context: confirmMail):Promise<any> {
    return this.mailService.sendMail({ to, subject, template, context, });
  }

  async gratyMail(to: string, subject: string, template: string, context: Mail):Promise<any> {
    return this.mailService.sendMail({ to, subject, template, context, });
  }

  async resetPwdMail(to: string, subject: string, template: string, context: resetPwdMail):Promise<any> {
    return this.mailService.sendMail({ to, subject, template, context, });
  }
}
