import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePraktekDto {
  @IsString()
  @IsNotEmpty()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'konsultasi umum - Gigi' })
  nama_praktek: string;

  @IsString()
  @IsNotEmpty()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'dr. soerjo hastomo' })
  dokter: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 300000 })
  biaya: number;
}
