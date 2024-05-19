import { Test, TestingModule } from '@nestjs/testing';
import { RateController } from './rate.controller';
import { RateService } from './rate.service';
import { HttpModule } from '@nestjs/axios';

describe('RateController', () => {
  let controller: RateController;
  let service: RateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RateController],
      providers: [RateService],
      imports: [HttpModule],
    }).compile();

    controller = module.get<RateController>(RateController);
    service = module.get<RateService>(RateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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
function asyc(): () => Promise<
  import('./lib/types/rate-object.type').RateObject
> {
  throw new Error('Function not implemented.');
}
