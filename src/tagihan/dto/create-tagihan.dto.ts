import { Transform } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class CreateTagihanDto {
  @IsOptional()
  @IsString()
  @Transform((o) => o.value.toString().toLocaleLowerCase())
  keterangan?: string;
}
