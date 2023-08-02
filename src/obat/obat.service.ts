import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateObatDto } from './dto/create-obat.dto';
import { UpdateObatDto } from './dto/update-obat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Obat } from './entities/obat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ObatService {
  constructor(
    @InjectRepository(Obat)
    private obatRepository: Repository<Obat>,
  ) {}

  create(createObatDto: CreateObatDto) {
    return this.obatRepository.save({ ...createObatDto });
  }

  findAll() {
    return this.obatRepository.find({ order: { nama_obat: 'ASC' } });
  }

  findOne(id: string) {
    return this.obatRepository.findOneBy({ id });
  }

  async update(id: string, updateObatDto: UpdateObatDto) {
    const obat = await this.obatRepository.findOneBy({ id });

    if (!obat)
      return new HttpException('obat is not found!', HttpStatus.NOT_FOUND);

    this.obatRepository.save({
      ...obat,
      ...updateObatDto,
    });
  }

  async updateQty(id: string, qty_out: number) {
    const obat = await this.obatRepository.findOneBy({ id });

    if (!obat)
      return new HttpException('obat is not found!', HttpStatus.NOT_FOUND);

    this.obatRepository.save({
      ...obat,
      qty_obat: obat.qty_obat - qty_out,
    });
  }
}
