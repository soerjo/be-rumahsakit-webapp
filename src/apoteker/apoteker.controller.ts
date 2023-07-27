import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApotekerService } from './apoteker.service';
import { CreateApotekerDto } from './dto/create-apoteker.dto';
import { UpdateApotekerDto } from './dto/update-apoteker.dto';

@Controller('apoteker')
export class ApotekerController {
  constructor(private readonly apotekerService: ApotekerService) {}

  @Post()
  create(@Body() createApotekerDto: CreateApotekerDto) {
    return this.apotekerService.create(createApotekerDto);
  }

  @Get()
  findAll() {
    return this.apotekerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apotekerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApotekerDto: UpdateApotekerDto) {
    return this.apotekerService.update(+id, updateApotekerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apotekerService.remove(+id);
  }
}
