import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePraktekDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'konsultasi umum - Gigi' })
  nama_praktek: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'dr. soerjo hastomo' })
  dokter: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 300000 })
  biaya: number;
}
