import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateDokterDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '' })
  fullname: string;

  @IsEmail()
  @IsNotEmpty()
  @ValidateIf((o) => !o.phonenumber || o.email)
  @ApiProperty({ example: '' })
  email?: string;

  @IsString()
  @IsNotEmpty()
  @ValidateIf((o) => !o.email || o.phonenumber)
  @ApiProperty({ example: '' })
  phonenumber?: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '' })
  specialist?: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({ example: '10-05-1996' })
  tanggal_lahir: Date;
}
