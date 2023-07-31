import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTagihanDto } from './dto/create-tagihan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tagihan } from './entities/tagihan.entity';
import { Repository } from 'typeorm';
import { PasienService } from 'src/pasien/pasien.service';
import { ObatkeluarService } from 'src/obatkeluar/obatkeluar.service';

@Injectable()
export class TagihanService {
  constructor(
    @InjectRepository(Tagihan)
    private tagihanRepository: Repository<Tagihan>,
    private pasienService: PasienService,
    private obatKeluarService: ObatkeluarService,
  ) {}

  async create(userid: string, createTagihanDto: CreateTagihanDto) {
    const pasien = await this.pasienService.findOne(userid);
    if (!pasien)
      return new HttpException('pasien is not found!', HttpStatus.NOT_FOUND);
    const biaya_dokter = pasien.praktek.biaya;

    let biaya_obat = 0;
    const obatkeluar = await this.obatKeluarService.findAll(userid);
    for (const perobat of obatkeluar) {
      biaya_obat = biaya_obat + perobat.harga_satuan * perobat.qty_obat;
    }

    const tagihan = this.tagihanRepository.save({
      pasien: pasien,
      keterangan: createTagihanDto?.keterangan,
      biaya_dokter: biaya_dokter,
      biaya_obat: biaya_obat,
    });

    return { tagihan, obatkeluar, biaya_dokter, biaya_obat };
  }

  findAll() {
    return this.tagihanRepository.find();
  }

  async findOne(id: string) {
    const tagihan = await this.tagihanRepository.findOneBy({ id });

    if (!tagihan)
      return new HttpException('tagihan is not found!', HttpStatus.NOT_FOUND);

    const obatkeluar = await this.obatKeluarService.findAll(tagihan.pasien.id);
    const biaya_dokter = tagihan.biaya_dokter;
    const biaya_obat = tagihan.biaya_obat;

    return { tagihan, obatkeluar, biaya_dokter, biaya_obat };
  }
}
