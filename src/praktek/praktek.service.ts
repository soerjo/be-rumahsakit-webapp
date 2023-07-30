import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePraktekDto } from './dto/create-praktek.dto';
import { UpdatePraktekDto } from './dto/update-praktek.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Praktek } from './entities/praktek.entity';
import { Repository } from 'typeorm';
import { DokterService } from 'src/dokter/dokter.service';

@Injectable()
export class PraktekService {
  constructor(
    @InjectRepository(Praktek)
    private praktekRepository: Repository<Praktek>,
    private dokterService: DokterService,
  ) {}

  async findByName(nama_praktek: string) {
    return this.praktekRepository.findOneBy({ nama_praktek });
  }

  async create(createPraktekDto: CreatePraktekDto) {
    const dokter = await this.dokterService.findByFullname(
      createPraktekDto.dokter,
    );

    if (!dokter)
      return new HttpException('dokter is not found', HttpStatus.NOT_FOUND);

    return await this.praktekRepository.save({
      ...createPraktekDto,
      dokter: dokter,
    });
  }

  findAll() {
    return this.praktekRepository.find();
  }

  async update(id: string, updatePraktekDto: UpdatePraktekDto) {
    const praktek = await this.praktekRepository.findOneBy({ id });
    if (!praktek)
      return new HttpException('praktek is not found', HttpStatus.NOT_FOUND);

    const dokter = await this.dokterService.findByFullname(
      updatePraktekDto.dokter,
    );

    if (!dokter)
      return new HttpException('dokter is not found', HttpStatus.NOT_FOUND);

    return await this.praktekRepository.save({
      ...praktek,
      ...updatePraktekDto,
      dokter: dokter,
    });
  }

  async remove(id: string) {
    const praktek = await this.praktekRepository.findOneBy({ id });
    if (!praktek)
      return new HttpException('praktek is not found', HttpStatus.NOT_FOUND);

    return this.praktekRepository.remove(praktek);
  }
}
