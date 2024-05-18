import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(email: string | string[], rate: number): Promise<any> {
    return this.mailerService.sendMail({
      to: email,
      from: process.env.MAIL_USER,
      subject: 'Current UAH to USD rate',
      html: `<p>Current rate is ${rate}</p>`,
    });
  }
}
