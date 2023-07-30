import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { AdminRole } from '../entities/admin.entity';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @IsString()
  @MaxLength(50)
  @IsNotEmpty()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'suryo hastomo' })
  fullname: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  @ApiProperty({ example: '10-05-1996' })
  tanggal_lahir: Date;

  @IsEmail()
  @IsNotEmpty()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'ryohastomo@mail.com' })
  email: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 87808295838 })
  phonenumber: number;

  @IsEnum(AdminRole)
  @IsNotEmpty()
  @ApiProperty({ example: AdminRole.ADMIN, enum: AdminRole })
  role_admin: AdminRole;
}
