import { Test, TestingModule } from '@nestjs/testing';
import { ApotekerController } from './apoteker.controller';
import { ApotekerService } from './apoteker.service';

describe('ApotekerController', () => {
  let controller: ApotekerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApotekerController],
      providers: [ApotekerService],
    }).compile();

    controller = module.get<ApotekerController>(ApotekerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
