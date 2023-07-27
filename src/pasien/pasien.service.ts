import { Injectable } from '@nestjs/common';
import { CreatePasienDto } from './dto/create-pasien.dto';
import { UpdatePasienDto } from './dto/update-pasien.dto';

@Injectable()
export class PasienService {
  create(createPasienDto: CreatePasienDto) {
    return 'This action adds a new pasien';
  }

  findAll() {
    return `This action returns all pasien`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pasien`;
  }

  update(id: number, updatePasienDto: UpdatePasienDto) {
    return `This action updates a #${id} pasien`;
  }

  remove(id: number) {
    return `This action removes a #${id} pasien`;
  }
}
