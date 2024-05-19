import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { Subscription } from './entities/subscription.entity';
import { REPOSITORY } from 'src/constants';

@Injectable()
export class SubscriptionService {
  @Inject(REPOSITORY.SUBSCRIPTION)
  private subscriptionRepository: typeof Subscription;

  async findByEmail(email: string): Promise<Subscription | null> {
    return await this.subscriptionRepository.findOne({
      where: {
        email,
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
  }

  async findAll(): Promise<Subscription[]> {
    return await this.subscriptionRepository.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
  }

  async subscribe(email: string): Promise<Subscription> {
    const subscription = await this.findByEmail(email);

    if (subscription) throw new ConflictException('You already subscribed!');

    return await this.subscriptionRepository.create({
      email,
    });
  }
}
