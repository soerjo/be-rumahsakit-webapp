import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePasienDto } from './dto/create-pasien.dto';
import { UpdatePasienDto } from './dto/update-pasien.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pasien } from './entities/pasien.entity';
import { Repository } from 'typeorm';
import { PraktekService } from 'src/praktek/praktek.service';

@Injectable()
export class PasienService {
  constructor(
    @InjectRepository(Pasien)
    private pasienRepository: Repository<Pasien>,
    private praktekService: PraktekService,
  ) {}

  async create(createPasienDto: CreatePasienDto) {
    const getPraktek = await this.praktekService.findByName(
      createPasienDto.praktek,
    );

    if (!getPraktek)
      return new HttpException('praktek is not found!', HttpStatus.NOT_FOUND);

    return await this.pasienRepository.save({
      ...createPasienDto,
      praktek: getPraktek,
    });
  }

  findAll() {
    return this.pasienRepository.find();
  }

  findOne(id: string) {
    return this.pasienRepository.findOneBy({ id });
  }

  async update(id: string, updatePasienDto: UpdatePasienDto) {
    const pasien = await this.pasienRepository.findOne({
      where: { id },
      relations: { praktek: true },
    });

    if (!pasien)
      return new HttpException('pasien is not found!', HttpStatus.NOT_FOUND);

    if (updatePasienDto?.praktek) {
      const praktek = await this.praktekService.findByName(
        updatePasienDto.praktek,
      );

      delete updatePasienDto.praktek;
      return await this.pasienRepository.save({
        ...pasien,
        ...updatePasienDto,
        praktek,
      });
    }

    delete updatePasienDto.praktek;
    return await this.pasienRepository.save({
      ...pasien,
      ...(updatePasienDto as Omit<UpdatePasienDto, 'praktek'>),
    });
  }

  async remove(id: string) {
    const pasien = await this.pasienRepository.findOneBy({ id });
    if (!pasien)
      return new HttpException('passien is not found!', HttpStatus.NOT_FOUND);

    this.pasienRepository.remove(pasien);
  }
}
