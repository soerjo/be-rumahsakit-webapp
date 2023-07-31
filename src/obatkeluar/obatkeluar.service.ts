import { Injectable } from '@nestjs/common';
import { CreateObatkeluarDto } from './dto/create-obatkeluar.dto';
import { UpdateObatkeluarDto } from './dto/update-obatkeluar.dto';

@Injectable()
export class ObatkeluarService {
  create(createObatkeluarDto: CreateObatkeluarDto) {
    return 'This action adds a new obatkeluar';
  }

  findAll() {
    return `This action returns all obatkeluar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} obatkeluar`;
  }

  update(id: number, updateObatkeluarDto: UpdateObatkeluarDto) {
    return `This action updates a #${id} obatkeluar`;
  }

  remove(id: number) {
    return `This action removes a #${id} obatkeluar`;
  }
}
