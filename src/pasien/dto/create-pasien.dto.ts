import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';
import { Praktek } from 'src/dokter/entities/praktek.entity';

export class CreatePasienDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'pasien soerjo' })
  fullname: string;

  @IsNotEmpty()
  @IsString()
  @ValidateIf((o) => !o.phonenumber || o.email)
  @IsOptional()
  @ApiProperty({ example: 'passoerjo@mail.com', required: false })
  email?: string;

  @IsNotEmpty()
  @IsNumber()
  @ValidateIf((o) => !o.email || o.phonenumber)
  @IsOptional()
  @ApiProperty({ example: 87808295838, required: false })
  phonenumber?: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  @ApiProperty({ example: '05-10-1996' })
  tanggal_lahir?: Date;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 172 })
  tinggi?: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ example: 56 })
  berat_badan?: number;

  @IsString()
  @ApiProperty({ example: 'sakit sesuatu...' })
  diagnosa?: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'konsultasi umum' })
  praktek: Praktek;
}
