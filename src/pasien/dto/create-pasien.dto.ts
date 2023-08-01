import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreatePasienDto {
  @IsNotEmpty()
  @IsString()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'pasien soerjo' })
  fullname: string;

  @IsNotEmpty()
  @IsEmail()
  @ValidateIf((o) => !o.phonenumber || o.email)
  @IsOptional()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
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
  @IsOptional()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'sakit sesuatu...' })
  diagnosa?: string;

  @IsNotEmpty()
  @IsString()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'konsultasi umum' })
  praktek: string;
}
