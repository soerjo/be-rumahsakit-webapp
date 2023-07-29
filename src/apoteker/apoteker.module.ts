import { Module } from '@nestjs/common';
import { ApotekerService } from './apoteker.service';
import { ApotekerController } from './apoteker.controller';

@Module({
  // controllers: [ApotekerController],
  providers: [ApotekerService],
})
export class ApotekerModule {}
