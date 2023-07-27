import { Module } from '@nestjs/common';
import { ObatService } from './obat.service';
import { ObatController } from './obat.controller';

@Module({
  controllers: [ObatController],
  providers: [ObatService]
})
export class ObatModule {}
