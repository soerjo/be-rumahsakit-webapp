import { Injectable } from '@nestjs/common';
import { CreateResepDto } from './dto/create-resep.dto';
import { UpdateResepDto } from './dto/update-resep.dto';

@Injectable()
export class ResepService {
  create(createResepDto: CreateResepDto) {
    return 'This action adds a new resep';
  }

  findAll() {
    return `This action returns all resep`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resep`;
  }

  update(id: number, updateResepDto: UpdateResepDto) {
    return `This action updates a #${id} resep`;
  }

  remove(id: number) {
    return `This action removes a #${id} resep`;
  }
}
