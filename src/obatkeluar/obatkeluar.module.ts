import { Module } from '@nestjs/common';
import { ObatkeluarService } from './obatkeluar.service';
import { ObatkeluarController } from './obatkeluar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObatKeluar } from './entities/obatkeluar.entity';
import { JwtModule } from '@nestjs/jwt';
import { PasienModule } from 'src/pasien/pasien.module';
import { ObatModule } from 'src/obat/obat.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ObatKeluar]),
    JwtModule,
    PasienModule,
    ObatModule,
  ],
  controllers: [ObatkeluarController],
  providers: [ObatkeluarService],
})
export class ObatkeluarModule {}
