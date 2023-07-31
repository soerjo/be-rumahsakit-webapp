import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export const exampleObatKeluar = [
  {
    id_obat: 'obat_herbal_lancar',
    qty_obat: 12,
  },
  {
    id_obat: 'obat_batuk',
    qty_obat: 3,
  },
];

export class CreateObatkeluarDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '6510ac5b-76f7-4a2b-82e7-8d4823f794ac' })
  userid: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObatKeluarDto)
  @ApiProperty({ example: exampleObatKeluar })
  item: ObatKeluarDto[];
}

export class ObatKeluarDto {
  @IsString()
  @IsNotEmpty()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  id_obat: string;

  @IsNumber()
  @IsNotEmpty()
  qty_obat: number;
}
