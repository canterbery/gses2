import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { RateService } from './rate/rate.service';
import { SubscriptionService } from './subscription/subscription.service';
import { EmailService } from './email/email.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  @Inject() private rateService: RateService;
  @Inject() private subscriptionService: SubscriptionService;
  @Inject() private emailService: EmailService;

  @Cron('* 10 * * * *')
  async handleCron() {
    const { rate } = await this.rateService.getCurrentRate();
    const subscribers = await this.subscriptionService.findAll();

    if (subscribers.length > 0) {
      const emails = subscribers.map((sub) => sub.email);
      this.emailService.sendEmail(emails, rate);
    }

    this.logger.debug('Called when the current second is 45');
  }
}
