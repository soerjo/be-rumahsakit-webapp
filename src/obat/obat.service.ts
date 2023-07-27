import { Injectable } from '@nestjs/common';
import { CreateObatDto } from './dto/create-obat.dto';
import { UpdateObatDto } from './dto/update-obat.dto';

@Injectable()
export class ObatService {
  create(createObatDto: CreateObatDto) {
    return 'This action adds a new obat';
  }

  findAll() {
    return `This action returns all obat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} obat`;
  }

  update(id: number, updateObatDto: UpdateObatDto) {
    return `This action updates a #${id} obat`;
  }

  remove(id: number) {
    return `This action removes a #${id} obat`;
  }
}
