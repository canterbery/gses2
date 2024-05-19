import { Body, Controller, Post } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SubscribeDto } from './dto/subscribe.dto';

@Controller('subscription')
@ApiTags('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post()
  @ApiOperation({
    summary: 'Підписати емейл на отримання поточного курсу',
    description:
      'Запит має перевірити, чи немає данної електронної адреси в поточній базі даних і, в разі її відсутності, записувати її.',
    operationId: 'subscribe',
  })
  @ApiConsumes('application/json', 'application/x-www-form-urlencoded')
  @ApiBody({ type: SubscribeDto })
  @ApiResponse({
    status: 201,
    description: 'E-mail додано',
  })
  @ApiResponse({
    status: 409,
    description: 'Користувач з таким емейлом вже підписаний!',
  })
  subscribe(@Body() subscribeDto: SubscribeDto) {
    return this.subscriptionService.subscribe(subscribeDto.email);
  }
}
