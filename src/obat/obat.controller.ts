import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObatService } from './obat.service';
import { CreateObatDto } from './dto/create-obat.dto';
import { UpdateObatDto } from './dto/update-obat.dto';

@Controller('obat')
export class ObatController {
  constructor(private readonly obatService: ObatService) {}

  @Post()
  create(@Body() createObatDto: CreateObatDto) {
    return this.obatService.create(createObatDto);
  }

  @Get()
  findAll() {
    return this.obatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.obatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObatDto: UpdateObatDto) {
    return this.obatService.update(+id, updateObatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.obatService.remove(+id);
  }
}
