import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignAuthDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'admin_puskesmas' })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'password_rahasia' })
  password: string;
}
