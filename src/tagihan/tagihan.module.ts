import { Module } from '@nestjs/common';
import { TagihanService } from './tagihan.service';
import { TagihanController } from './tagihan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tagihan } from './entities/tagihan.entity';
import { PasienModule } from 'src/pasien/pasien.module';
import { JwtModule } from '@nestjs/jwt';
import { ObatkeluarModule } from 'src/obatkeluar/obatkeluar.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tagihan]),
    PasienModule,
    JwtModule,
    ObatkeluarModule,
  ],
  controllers: [TagihanController],
  providers: [TagihanService],
})
export class TagihanModule {}
