import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { PasienModule } from './pasien/pasien.module';
import { ObatModule } from './obat/obat.module';
import { TagihanModule } from './tagihan/tagihan.module';
import { DokterModule } from './dokter/dokter.module';
import { ResepModule } from './resep/resep.module';
import { PraktekModule } from './praktek/praktek.module';
import { ApotekerModule } from './apoteker/apoteker.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import { User } from './user/entities/user.entity';
import { Dokter } from './dokter/entities/dokter.entity';
import { Apoteker } from './apoteker/entities/apoteker.entity';
import { Resep } from './resep/entities/resep.entity';
import { Praktek } from './praktek/entities/praktek.entity';
import { Pasien } from './pasien/entities/pasien.entity';
import { Admin } from './admin/entities/admin.entity';
import { Obat } from './obat/entities/obat.entity';
import { ObatKeluar } from './obat/entities/obatkeluar.entity';

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
    ResepModule,
  ],
})
export class AppModule {}
