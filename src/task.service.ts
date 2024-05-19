import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { RateService } from './rate/rate.service';
import { SubscriptionService } from './subscription/subscription.service';
import { EmailService } from './email/email.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  @Inject() private rateService: RateService;
  @Inject() private subscriptionService: SubscriptionService;
  @Inject() private emailService: EmailService;

  @Cron(CronExpression.EVERY_DAY_AT_1PM)
  async handleCron() {
    try {
      const { rate } = await this.rateService.getCurrentRate();
      const subscribers = await this.subscriptionService.findAll();

      if (subscribers.length > 0) {
        const emails = subscribers.map((sub) => sub.email);
        this.emailService.sendEmail(emails, rate);
      }

      this.logger.debug('Scheduled rate update completed.');
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
      }
      this.logger.error('Scheduled rate update failed');
    }
  }
}
