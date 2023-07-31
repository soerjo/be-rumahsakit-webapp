import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateIf,
} from 'class-validator';

export class CreateApotekerDto {
  @IsString()
  @IsNotEmpty()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'tomo tomo' })
  fullname: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ValidateIf((o) => !o.email || o.phonenumber)
  @ApiProperty({ example: 'tomotomo@mail.com' })
  email?: string;

  @IsNumber()
  @IsNotEmpty()
  @ValidateIf((o) => !o.phonenumber || o.email)
  @ApiProperty({ example: 87808295838 })
  phonenumber?: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({ example: '05-10-1996' })
  tanggal_lahir: Date;
}
