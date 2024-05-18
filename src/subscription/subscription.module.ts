import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { subscriptionProvider } from './subscription.provider';

@Module({
  controllers: [SubscriptionController],
  providers: [SubscriptionService, subscriptionProvider],
  exports: [SubscriptionService],
})
export class SubscriptionModule {}
