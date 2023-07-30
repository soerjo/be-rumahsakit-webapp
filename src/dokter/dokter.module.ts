import { Module } from '@nestjs/common';
import { DokterService } from './dokter.service';
import { DokterController } from './dokter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dokter } from './entities/dokter.entity';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Dokter]), UserModule, JwtModule],
  controllers: [DokterController],
  providers: [DokterService],
  exports: [DokterService],
})
export class DokterModule {}
