import { Test, TestingModule } from '@nestjs/testing';
import { PasienController } from './pasien.controller';
import { PasienService } from './pasien.service';

describe('PasienController', () => {
  let controller: PasienController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasienController],
      providers: [PasienService],
    }).compile();

    controller = module.get<PasienController>(PasienController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
