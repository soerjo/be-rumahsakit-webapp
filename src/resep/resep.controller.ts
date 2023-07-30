import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResepService } from './resep.service';
import { CreateResepDto } from './dto/create-resep.dto';
import { UpdateResepDto } from './dto/update-resep.dto';

@Controller('resep')
export class ResepController {
  constructor(private readonly resepService: ResepService) {}

  @Post()
  create(@Body() createResepDto: CreateResepDto) {
    return this.resepService.create(createResepDto);
  }

  @Get()
  findAll() {
    return this.resepService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resepService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResepDto: UpdateResepDto) {
    return this.resepService.update(+id, updateResepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resepService.remove(+id);
  }
}
