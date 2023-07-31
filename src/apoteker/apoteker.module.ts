import { Module } from '@nestjs/common';
import { ApotekerService } from './apoteker.service';
import { ApotekerController } from './apoteker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apoteker } from './entities/apoteker.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Apoteker]), JwtModule, UserModule],
  controllers: [ApotekerController],
  providers: [ApotekerService],
})
export class ApotekerModule {}
