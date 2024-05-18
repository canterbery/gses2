import { Controller, Get } from '@nestjs/common';
import { RateService } from './rate.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RateObject } from './lib/types/rate-object.type';

@Controller('rate')
@ApiTags('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Get()
  @ApiOperation({ summary: 'Отримати поточний курс USD до UAH' })
  @ApiResponse({
    status: 200,
    description: 'Повертається актуальний курс USD до UAH',
  })
  @ApiResponse({ status: 400, description: 'Invalid status value' })
  async getCurrentRate(): Promise<RateObject> {
    try {
      return await this.rateService.getCurrentRate();
    } catch (error) {
      throw error;
    }
  }
}
