import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { RateObject, RateResponse } from './lib/types/types.js';
import { lastValueFrom } from 'rxjs';
import { USD_R030_CODE } from './lib/constants/constants.js';

@Injectable()
export class RateService {
  constructor(private httpService: HttpService) {}

  async getCurrentRate(): Promise<RateObject> {
    const { data } = await lastValueFrom(
      this.httpService.get<RateResponse>(process.env.RATE_BASE_URL, {
        params: {
          json: '',
        },
      }),
    );

    if (!data) {
      throw new BadRequestException('Invalid status value');
    }

    const usdRate = data.find((rateObj) => rateObj.r030 === USD_R030_CODE);

    return usdRate;
  }
}
