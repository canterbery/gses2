import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { databaseProvider } from './database.provider';
import { RateModule } from './rate/rate.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { EmailModule } from './email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './task.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../.env.dev', './.env'],
    }),
    ScheduleModule.forRoot(),
    RateModule,
    SubscriptionModule,
    EmailModule,
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
  controllers: [AppController],
  providers: [AppService, databaseProvider, TasksService],
  exports: [databaseProvider],
})
export class AppModule {}
