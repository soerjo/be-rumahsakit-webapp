import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObatkeluarService } from './obatkeluar.service';
import { CreateObatkeluarDto } from './dto/create-obatkeluar.dto';
import { UpdateObatkeluarDto } from './dto/update-obatkeluar.dto';

@Controller('obatkeluar')
export class ObatkeluarController {
  constructor(private readonly obatkeluarService: ObatkeluarService) {}

  @Post()
  create(@Body() createObatkeluarDto: CreateObatkeluarDto) {
    return this.obatkeluarService.create(createObatkeluarDto);
  }

  @Get()
  findAll() {
    return this.obatkeluarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.obatkeluarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObatkeluarDto: UpdateObatkeluarDto) {
    return this.obatkeluarService.update(+id, updateObatkeluarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.obatkeluarService.remove(+id);
  }
}
