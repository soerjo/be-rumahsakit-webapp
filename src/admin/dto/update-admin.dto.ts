import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { AdminRole } from '../entities/admin.entity';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdminDto {
  @IsString()
  @MaxLength(50)
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'suryo hastomo' })
  fullname: string;

  @IsDate()
  @Type(() => Date)
  @ApiProperty({ example: '10-05-1996' })
  tanggal_lahir: Date;

  @IsEmail()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'ryohastomo@mail.com' })
  email: string;

  @IsNumber()
  @ApiProperty({ example: 87808295838 })
  phonenumber: number;

  @IsEnum(AdminRole)
  @ApiProperty({ example: AdminRole.ADMIN, enum: AdminRole })
  role_admin: AdminRole;
}
