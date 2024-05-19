import { REPOSITORY } from 'src/constants';
import { Subscription } from './entities/subscription.entity';

export const subscriptionProvider = {
  provide: REPOSITORY.SUBSCRIPTION,
  useValue: Subscription,
};
