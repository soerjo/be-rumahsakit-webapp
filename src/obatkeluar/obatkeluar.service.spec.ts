import { Test, TestingModule } from '@nestjs/testing';
import { ObatkeluarService } from './obatkeluar.service';

describe('ObatkeluarService', () => {
  let service: ObatkeluarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObatkeluarService],
    }).compile();

    service = module.get<ObatkeluarService>(ObatkeluarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
