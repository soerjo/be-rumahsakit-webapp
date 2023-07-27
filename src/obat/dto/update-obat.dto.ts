import { PartialType } from '@nestjs/mapped-types';
import { CreateObatDto } from './create-obat.dto';

export class UpdateObatDto extends PartialType(CreateObatDto) {}
