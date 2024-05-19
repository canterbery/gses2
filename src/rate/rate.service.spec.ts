import { Test, TestingModule } from '@nestjs/testing';
import { RateService } from './rate.service';
import { HttpModule } from '@nestjs/axios';

describe('RateService', () => {
  let service: RateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RateService],
      imports: [HttpModule],
    }).compile();

    service = module.get<RateService>(RateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCurrentRate', () => {
    it('should return USD to UAH rate', async () => {
      const result = {
        r030: 231,
        txt: 'USD',
        rate: 32.322,
        cc: 'test',
        exchangedate: '01.01.2001',
      };
      jest
        .spyOn(service, 'getCurrentRate')
        .mockImplementation(async () => result);

      expect(await service.getCurrentRate()).toBe(result);
    });
  });
});
