import { Test, TestingModule } from '@nestjs/testing';
import { ObatkeluarController } from './obatkeluar.controller';
import { ObatkeluarService } from './obatkeluar.service';

describe('ObatkeluarController', () => {
  let controller: ObatkeluarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObatkeluarController],
      providers: [ObatkeluarService],
    }).compile();

    controller = module.get<ObatkeluarController>(ObatkeluarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
