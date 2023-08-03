import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ObatkeluarService } from './obatkeluar.service';
import { CreateObatkeluarDto } from './dto/create-obatkeluar.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('obatkeluar')
export class ObatkeluarController {
  constructor(private readonly obatkeluarService: ObatkeluarService) {}

  @Post()
  create(@Body() createObatkeluarDto: CreateObatkeluarDto) {
    return this.obatkeluarService.create(createObatkeluarDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.obatkeluarService.findAll(id);
  }
}
