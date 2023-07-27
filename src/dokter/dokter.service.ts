import { Injectable } from '@nestjs/common';
import { CreateDokterDto } from './dto/create-dokter.dto';
import { UpdateDokterDto } from './dto/update-dokter.dto';

@Injectable()
export class DokterService {
  create(createDokterDto: CreateDokterDto) {
    return 'This action adds a new dokter';
  }

  findAll() {
    return `This action returns all dokter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dokter`;
  }

  update(id: number, updateDokterDto: UpdateDokterDto) {
    return `This action updates a #${id} dokter`;
  }

  remove(id: number) {
    return `This action removes a #${id} dokter`;
  }
}
