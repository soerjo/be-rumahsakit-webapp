import { Module } from '@nestjs/common';
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
import { Praktek } from './praktek/entities/praktek.entity';
import { Pasien } from './pasien/entities/pasien.entity';
import { AuthModule } from './auth/auth.module';
import { Admin } from './admin/entities/admin.entity';
import { PraktekModule } from './praktek/praktek.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        User,
        Dokter,
        Praktek,
        Apoteker,
        ObatKeluar,
        Obat,
        Resep,
        Pasien,
        Admin,
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
    PraktekModule,
  ],
})
export class AppModule {}
