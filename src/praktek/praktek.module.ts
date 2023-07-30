import { Module } from '@nestjs/common';
import { PraktekService } from './praktek.service';
import { PraktekController } from './praktek.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Praktek } from './entities/praktek.entity';
import { JwtModule } from '@nestjs/jwt';
import { DokterModule } from 'src/dokter/dokter.module';

@Module({
  imports: [TypeOrmModule.forFeature([Praktek]), JwtModule, DokterModule],
  controllers: [PraktekController],
  providers: [PraktekService],
})
export class PraktekModule {}
