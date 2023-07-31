import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateResepDto } from './dto/create-resep.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resep } from './entities/resep.entity';
import { Repository } from 'typeorm';
import { PasienService } from 'src/pasien/pasien.service';

@Injectable()
export class ResepService {
  constructor(
    @InjectRepository(Resep)
    private resepRepository: Repository<Resep>,
    private pasienService: PasienService,
  ) {}

  async create(createResepDto: CreateResepDto) {
    const pasien = await this.pasienService.findOne(createResepDto.userid);
    if (!pasien)
      return new HttpException('pasien is not found!', HttpStatus.NOT_FOUND);

    const allResep: Resep[] = [];
    for (const create_resep of createResepDto.item) {
      allResep.push({
        pasien: pasien,
        ...create_resep,
      });
    }

    this.resepRepository.save(allResep);
  }

  async findAll(userid: string) {
    try {
      const listResep = await this.resepRepository.find({
        where: { pasien: { id: userid } },
      });

      return listResep;
    } catch (error) {
      return [];
    }
  }

  async approve(resepid: string) {
    const getresep = await this.resepRepository.findOneBy({ id: resepid });
    if (!getresep)
      return new HttpException('resep is not found!', HttpStatus.NOT_FOUND);

    getresep.persetujuan = true;
    this.resepRepository.save(getresep);
  }
}
