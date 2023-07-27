import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PasienModule } from './pasien/pasien.module';
import { ObatModule } from './obat/obat.module';
import { TagihanModule } from './tagihan/tagihan.module';
import { User } from './user/entities/user.entity';

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
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    PasienModule,
    ObatModule,
    TagihanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
