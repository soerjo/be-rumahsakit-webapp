import { PartialType } from '@nestjs/mapped-types';
import { CreateApotekerDto } from './create-apoteker.dto';

export class UpdateApotekerDto extends PartialType(CreateApotekerDto) {}
