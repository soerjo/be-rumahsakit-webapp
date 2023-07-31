import { Module } from '@nestjs/common';
import { ResepService } from './resep.service';
import { ResepController } from './resep.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Resep } from './entities/resep.entity';
import { PasienModule } from 'src/pasien/pasien.module';

@Module({
  imports: [TypeOrmModule.forFeature([Resep]), PasienModule, JwtModule],
  controllers: [ResepController],
  providers: [ResepService],
})
export class ResepModule {}
