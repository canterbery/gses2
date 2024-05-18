import { Subscription } from './entities/subscription.entity';

export const subscriptionProvider = {
  provide: 'SUBSCRIPTION',
  useValue: Subscription,
};
