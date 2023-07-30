import { Injectable } from '@nestjs/common';
import { CreatePasienDto } from './dto/create-pasien.dto';
import { UpdatePasienDto } from './dto/update-pasien.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pasien } from './entities/pasien.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PasienService {
  constructor(
    @InjectRepository(Pasien)
    private pasionRepository: Repository<Pasien>,
  ) {}

  async create(createPasienDto: CreatePasienDto) {
    return await this.pasionRepository.save(createPasienDto);
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
