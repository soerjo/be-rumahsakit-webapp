import { Module } from '@nestjs/common';
import { PasienService } from './pasien.service';
import { PasienController } from './pasien.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasien } from './entities/pasien.entity';

@Module({
  imports: [JwtModule, TypeOrmModule.forFeature([Pasien])],
  controllers: [PasienController],
  providers: [PasienService],
})
export class PasienModule {}
