import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { PasienModule } from './pasien/pasien.module';
import { ObatModule } from './obat/obat.module';
import { TagihanModule } from './tagihan/tagihan.module';
import { DokterModule } from './dokter/dokter.module';

import { User } from './user/entities/user.entity';
import { Dokter } from './dokter/entities/dokter.entity';
import { ApotekerModule } from './apoteker/apoteker.module';
import { AdminModule } from './admin/admin.module';
import { Apoteker } from './apoteker/entities/apoteker.entity';
import { ObatKeluar } from './apoteker/entities/obat_keluar.entity';
import { Obat } from './apoteker/entities/obat.entity';
import { Resep } from './apoteker/entities/resep.entity';
import { Praktek } from './dokter/entities/praktek.entity';
import { Pasien } from './pasien/entities/pasien.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'soerjo',
      password: 'soerjo123',
      database: 'soerjo',
      entities: [
        User,
        Dokter,
        Praktek,
        Apoteker,
        ObatKeluar,
        Obat,
        Resep,
        Pasien,
      ],
      synchronize: true,
    }),
    UserModule,
    PasienModule,
    ObatModule,
    TagihanModule,
    DokterModule,
    ApotekerModule,
    AdminModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
