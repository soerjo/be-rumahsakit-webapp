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
import { PraktekService } from './praktek.service';
import { CreatePraktekDto } from './dto/create-praktek.dto';
import { UpdatePraktekDto } from './dto/update-praktek.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('praktek')
export class PraktekController {
  constructor(private readonly praktekService: PraktekService) {}

  @Post()
  create(@Body() createPraktekDto: CreatePraktekDto) {
    return this.praktekService.create(createPraktekDto);
  }

  @Get()
  findAll() {
    return this.praktekService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.praktekService.findOne(id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePraktekDto: UpdatePraktekDto) {
    return this.praktekService.update(id, updatePraktekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.praktekService.remove(id);
  }
}
