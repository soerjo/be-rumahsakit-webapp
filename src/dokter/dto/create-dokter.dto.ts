import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateDokterDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'suryo hastomo' })
  fullname: string;

  @IsEmail()
  @IsNotEmpty()
  @ValidateIf((o) => !o.phonenumber || o.email)
  @ApiProperty({ example: 'suryo@mail.com' })
  email?: string;

  @IsNumber()
  @IsNotEmpty()
  @ValidateIf((o) => !o.email || o.phonenumber)
  @ApiProperty({ example: 87808295838 })
  phonenumber?: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Dokter Umum' })
  specialist?: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({ example: '10-05-1996' })
  tanggal_lahir: Date;
}
