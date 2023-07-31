import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { SatuanObat } from '../entities/obat.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateObatDto {
  @IsString()
  @IsNotEmpty()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'parasetamol' })
  nama_obat: string;

  @IsString()
  @IsNotEmpty()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: 'parasetamol' })
  kandungan_obat: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'ParasetamolPlus' })
  merek_obat: string;

  @IsString()
  @IsOptional()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  @ApiProperty({ example: '', required: false })
  keterangan?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 100 })
  qty_obat: number;

  @IsEnum(SatuanObat)
  @IsNotEmpty()
  @ApiProperty({ example: SatuanObat.BUNGKUS })
  satuan_obat: SatuanObat;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 10000 })
  harga_jual_satuan: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 9500 })
  harga_beli_satuan: number;
}
