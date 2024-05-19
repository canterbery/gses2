import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';

describe('MailerService', () => {
  let service: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailService],
      imports: [
        MailerModule.forRootAsync({
          useFactory: () => ({
            transport: {
              host: 'smtp.gmail.com',
              port: 465,
              auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
              },
            },
          }),
        }),
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
