import { Module } from '@nestjs/common';
import { DokterService } from './dokter.service';
import { DokterController } from './dokter.controller';

@Module({
  controllers: [DokterController],
  providers: [DokterService]
})
export class DokterModule {}
