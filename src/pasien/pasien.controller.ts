import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { PasienService } from './pasien.service';
import { CreatePasienDto } from './dto/create-pasien.dto';
import { UpdatePasienDto } from './dto/update-pasien.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

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
  @ApiQuery({ name: 'praktek', required: false, type: String })
  findAll(@Query('praktek') praktek?: string) {
    return this.pasienService.findAll(praktek);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePasienDto: UpdatePasienDto) {
    return this.pasienService.update(id, updatePasienDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pasienService.remove(id);
  }
}
