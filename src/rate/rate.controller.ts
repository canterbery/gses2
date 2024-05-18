import { Controller, Get } from '@nestjs/common';
import { RateService } from './rate.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RateObject } from './lib/types/rate-object.type';

@Controller('rate')
@ApiTags('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Get()
  @ApiOperation({
    summary: 'Отримати поточний курс USD до UAH',
    description:
      'Запит має повертати поточний курс USD до UAH використовуючи будь-який third party сервіс з публічним АРІ',
  })
  @ApiResponse({
    status: 200,
    description: 'Повертається актуальний курс USD до UAH',
    schema: { type: 'number', example: '32.883' },
  })
  @ApiResponse({ status: 400, description: 'Invalid status value' })
  async getCurrentRate(): Promise<Number> {
    try {
      const { rate } = await this.rateService.getCurrentRate();
      return rate;
    } catch (error) {
      throw error;
    }
  }
}
