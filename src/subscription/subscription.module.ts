import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { subscriptionProvider } from './subscription.provider';

@Module({
  controllers: [SubscriptionController],
  providers: [SubscriptionService, subscriptionProvider],
})
export class SubscriptionModule {}
