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
import { DokterService } from './dokter.service';
import { CreateDokterDto } from './dto/create-dokter.dto';
import { UpdateDokterDto } from './dto/update-dokter.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('dokter')
export class DokterController {
  constructor(private readonly dokterService: DokterService) {}

  @Post()
  create(@Body() createDokterDto: CreateDokterDto) {
    return this.dokterService.create(createDokterDto);
  }

  @Get()
  findAll() {
    return this.dokterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dokterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDokterDto: UpdateDokterDto) {
    return this.dokterService.update(id, updateDokterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dokterService.remove(id);
  }
}
