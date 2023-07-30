import { PartialType } from '@nestjs/swagger';
import { CreatePraktekDto } from './create-praktek.dto';

export class UpdatePraktekDto extends PartialType(CreatePraktekDto) {}
