import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TagihanService } from './tagihan.service';
import { CreateTagihanDto } from './dto/create-tagihan.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('tagihan')
export class TagihanController {
  constructor(private readonly tagihanService: TagihanService) {}

  @Post(':id')
  create(@Param('id') id: string, @Body() createTagihanDto: CreateTagihanDto) {
    return this.tagihanService.create(id, createTagihanDto);
  }

  @Get()
  findAll() {
    return this.tagihanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagihanService.findOne(id);
  }
}
