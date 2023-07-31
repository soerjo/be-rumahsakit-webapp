import { PartialType } from '@nestjs/swagger';
import { CreateObatkeluarDto } from './create-obatkeluar.dto';

export class UpdateObatkeluarDto extends PartialType(CreateObatkeluarDto) {}
