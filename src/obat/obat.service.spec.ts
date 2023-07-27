import { Test, TestingModule } from '@nestjs/testing';
import { ObatService } from './obat.service';

describe('ObatService', () => {
  let service: ObatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObatService],
    }).compile();

    service = module.get<ObatService>(ObatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
