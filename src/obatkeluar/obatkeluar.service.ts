import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateObatkeluarDto } from './dto/create-obatkeluar.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ObatKeluar } from './entities/obatkeluar.entity';
import { Repository } from 'typeorm';
import { PasienService } from 'src/pasien/pasien.service';
import { ObatService } from 'src/obat/obat.service';

@Injectable()
export class ObatkeluarService {
  constructor(
    @InjectRepository(ObatKeluar)
    private obatkeluarRepository: Repository<ObatKeluar>,
    private pasienService: PasienService,
    private obatService: ObatService,
  ) {}

  async create(createObatkeluarDto: CreateObatkeluarDto) {
    // console.log('obat');
    const pasien = await this.pasienService.findOne(createObatkeluarDto.userid);
    if (!pasien)
      return new HttpException('pasien is not found!', HttpStatus.NOT_FOUND);

    const allResep: ObatKeluar[] = [];
    for (const create_obat_keluar of createObatkeluarDto.item) {
      const obat = await this.obatService.findOne(create_obat_keluar.id);

      if (!obat)
        return new HttpException(
          `obat ${obat.id} is not found!`,
          HttpStatus.NOT_FOUND,
        );

      if (obat.qty_obat < create_obat_keluar.qty_obat)
        return new HttpException(
          `obat ${obat.id} is out of stock!`,
          HttpStatus.NOT_FOUND,
        );

      allResep.push({
        pasien: pasien,
        nama_obat: obat.merek_obat,
        kandungan_obat: obat.kandungan_obat,
        merek_obat: obat.merek_obat,
        keterangan: obat.keterangan,
        qty_obat: obat.qty_obat,
        satuan_obat: obat.satuan_obat,
        harga_satuan: obat.harga_jual_satuan,
        total_harga: obat.qty_obat * obat.harga_jual_satuan,
      });
    }

    // console.log({ createObatkeluarDto });
    this.pasienService.updatePasienResep(createObatkeluarDto.userid, true);
    return this.obatkeluarRepository.save(allResep);
  }

  findAll(userid: string) {
    return this.obatkeluarRepository.find({
      where: { pasien: { id: userid } },
    });
  }
}
