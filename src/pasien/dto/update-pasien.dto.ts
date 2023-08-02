import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';

export class UpdatePasienDto {
  @IsOptional()
  @IsString()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ required: false, example: 'pasien soerjo' })
  fullname?: string;

  @IsOptional()
  @IsString()
  @ValidateIf((o) => !o.phonenumber || o.email)
  @IsOptional()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ required: false, example: 'passoerjo@mail.com' })
  email?: string;

  @IsOptional()
  @IsNumber()
  @ValidateIf((o) => !o.email || o.phonenumber)
  @IsOptional()
  @ApiProperty({ required: false, example: 87808295838 })
  phonenumber?: number;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  @ApiProperty({ required: false, example: '05-10-1996' })
  tanggal_lahir?: Date;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false, example: 172 })
  tinggi?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false, example: 56 })
  berat_badan?: number;

  @IsOptional()
  @IsString()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ required: false, example: 'sakit sesuatu...' })
  diagnosa?: string;

  // @IsOptional()
  // @IsString()
  // @Transform((o) => o.value.toString().toLocaleLowerCase())
  // @ApiProperty({ required: false, example: 'konsultasi umum' })
  // praktek: string;
}
