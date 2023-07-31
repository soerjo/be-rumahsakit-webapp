import { Module } from '@nestjs/common';
import { PasienService } from './pasien.service';
import { PasienController } from './pasien.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasien } from './entities/pasien.entity';
import { PraktekModule } from 'src/praktek/praktek.module';

@Module({
  imports: [JwtModule, TypeOrmModule.forFeature([Pasien]), PraktekModule],
  controllers: [PasienController],
  providers: [PasienService],
  exports: [PasienService],
})
export class PasienModule {}
