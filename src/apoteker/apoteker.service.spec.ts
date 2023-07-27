import { Test, TestingModule } from '@nestjs/testing';
import { ApotekerService } from './apoteker.service';

describe('ApotekerService', () => {
  let service: ApotekerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApotekerService],
    }).compile();

    service = module.get<ApotekerService>(ApotekerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
