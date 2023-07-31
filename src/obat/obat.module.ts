import { Module } from '@nestjs/common';
import { ObatService } from './obat.service';
import { ObatController } from './obat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Obat } from './entities/obat.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Obat]), JwtModule],
  controllers: [ObatController],
  providers: [ObatService],
  exports: [ObatService],
})
export class ObatModule {}
