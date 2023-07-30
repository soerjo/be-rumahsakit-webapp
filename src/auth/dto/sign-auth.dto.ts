import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignAuthDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'superduperuser' })
  username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'superduperpassword' })
  password: string;
}
