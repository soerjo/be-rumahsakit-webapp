import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDokterDto } from './dto/create-dokter.dto';
import { UpdateDokterDto } from './dto/update-dokter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dokter } from './entities/dokter.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class DokterService {
  constructor(
    @InjectRepository(Dokter)
    private dokterRepository: Repository<Dokter>,
    private userService: UserService,
  ) {}

  createSimplePassword(birth: Date, username: string): string {
    return (
      username.toLowerCase() +
      new Date(birth).getDate().toString().padStart(2, '0') +
      (new Date(birth).getMonth() + 1).toString().padStart(2, '0') +
      new Date(birth).getFullYear().toString()
    );
  }

  findByFullname(fullname: string) {
    return this.dokterRepository.findOneBy({ fullname });
  }

  async create(createDokterDto: CreateDokterDto) {
    const getDokter = await this.dokterRepository.findOneBy({
      fullname: createDokterDto.fullname,
    });

    if (getDokter)
      return new HttpException('dokter already exist', HttpStatus.CONFLICT);

    const username = 'dokter-' + createDokterDto.fullname.split(' ')[0];
    const password = this.createSimplePassword(
      new Date(createDokterDto.tanggal_lahir),
      createDokterDto.fullname.split(' ')[0],
    );

    const user = await this.userService.create({
      username: username,
      email: createDokterDto.email,
      role: Role.DOKTER,
      password: password,
    });

    const dokter = await this.dokterRepository.save({
      ...createDokterDto,
      user,
    });

    delete dokter.user.password;
    return dokter;
  }

  findAll() {
    return this.dokterRepository.find();
  }

  async findOne(id: string) {
    const dokter = await this.dokterRepository.findOne({
      where: { id },
      relations: { user: true },
    });

    if (!dokter)
      return new HttpException('data is not found!', HttpStatus.NOT_FOUND);

    return dokter;
  }

  async update(id: string, updateDokterDto: UpdateDokterDto) {
    let admin = await this.dokterRepository.findOne({
      where: { id },
      relations: { user: true },
    });

    const username = 'dokter-' + updateDokterDto.fullname.split(' ')[0];
    const password = this.createSimplePassword(
      new Date(updateDokterDto.tanggal_lahir),
      username,
    );

    const user = await this.userService.update(admin.user.id, {
      username: username,
      email: updateDokterDto.email,
      role: Role.DOKTER,
      password: password,
    });

    updateDokterDto.tanggal_lahir = new Date(updateDokterDto.tanggal_lahir);
    admin = await this.dokterRepository.save({
      ...admin,
      ...updateDokterDto,
      user: user,
    });

    delete admin.user.password;
    return admin;
  }

  async remove(id: string) {
    const admin = await this.dokterRepository.findOne({
      where: { id },
      relations: { user: true },
    });

    if (!admin)
      return new HttpException('data is not found!', HttpStatus.NOT_FOUND);

    this.dokterRepository.remove(admin);
    this.userService.remove(admin.user.id);
  }
}
