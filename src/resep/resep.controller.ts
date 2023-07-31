import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ResepService } from './resep.service';
import { CreateResepDto } from './dto/create-resep.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('resep')
export class ResepController {
  constructor(private readonly resepService: ResepService) {}

  @Post()
  create(@Body() createResepDto: CreateResepDto) {
    return this.resepService.create(createResepDto);
  }

  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.resepService.findAll(id);
  }

  @Get('/approve/:id')
  approve(@Param('id') id: string) {
    return this.resepService.approve(id);
  }
}
