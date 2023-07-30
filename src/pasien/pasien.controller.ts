import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PasienService } from './pasien.service';
import { CreatePasienDto } from './dto/create-pasien.dto';
import { UpdatePasienDto } from './dto/update-pasien.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('pasien')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class PasienController {
  constructor(private readonly pasienService: PasienService) {}

  @Post()
  create(@Body() createPasienDto: CreatePasienDto) {
    return this.pasienService.create(createPasienDto);
  }

  @Get()
  findAll() {
    return this.pasienService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pasienService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePasienDto: UpdatePasienDto) {
    return this.pasienService.update(+id, updatePasienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pasienService.remove(+id);
  }
}
