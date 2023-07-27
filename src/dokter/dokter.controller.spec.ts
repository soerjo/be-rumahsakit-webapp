import { Test, TestingModule } from '@nestjs/testing';
import { DokterController } from './dokter.controller';
import { DokterService } from './dokter.service';

describe('DokterController', () => {
  let controller: DokterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DokterController],
      providers: [DokterService],
    }).compile();

    controller = module.get<DokterController>(DokterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
