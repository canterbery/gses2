import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { subscriptionProvider } from './subscription.provider';

describe('SubscriptionController', () => {
  let controller: SubscriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionController],
      providers: [SubscriptionService, subscriptionProvider],
    }).compile();

    controller = module.get<SubscriptionController>(SubscriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
