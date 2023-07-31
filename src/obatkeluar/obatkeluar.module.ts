import { Module } from '@nestjs/common';
import { ObatkeluarService } from './obatkeluar.service';
import { ObatkeluarController } from './obatkeluar.controller';

@Module({
  controllers: [ObatkeluarController],
  providers: [ObatkeluarService]
})
export class ObatkeluarModule {}
