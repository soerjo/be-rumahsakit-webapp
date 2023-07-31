import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { SatuanObat } from 'src/obat/entities/obat.entity';
import { ApiProperty } from '@nestjs/swagger';

export const exampleData: ResepDto[] = [
  {
    kandungan_obat: 'obat_herbal_lancar',
    qty_obat: 12,
    satuan_obat: SatuanObat.TABLET,
  },
  {
    kandungan_obat: 'obat_batuk',
    qty_obat: 3,
    satuan_obat: SatuanObat.BOTOL,
  },
];

export class CreateResepDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '6510ac5b-76f7-4a2b-82e7-8d4823f794ac' })
  userid: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ResepDto)
  @ApiProperty({ example: exampleData })
  item: ResepDto[];
}

export class ResepDto {
  @IsString()
  @ApiProperty({ example: 'cafein' })
  kandungan_obat: string;

  @IsNumber()
  @ApiProperty({ example: 12 })
  qty_obat: number;

  @IsEnum(SatuanObat)
  @ApiProperty({ example: SatuanObat.TABLET })
  satuan_obat: SatuanObat;
}
