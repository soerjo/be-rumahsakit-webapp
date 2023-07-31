import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateApotekerDto } from './dto/create-apoteker.dto';
import { UpdateApotekerDto } from './dto/update-apoteker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { Apoteker } from './entities/apoteker.entity';
import { Role } from 'src/user/entities/user.entity';

@Injectable()
export class ApotekerService {
  constructor(
    @InjectRepository(Apoteker)
    private apotekerRepository: Repository<Apoteker>,
    private userService: UserService,
  ) {}

  findByFullname(fullname: string) {
    return this.apotekerRepository.findOneBy({ fullname });
  }

  createSimplePassword(birth: Date, username: string): string {
    return (
      username.toLowerCase() +
      new Date(birth).getDate().toString().padStart(2, '0') +
      (new Date(birth).getMonth() + 1).toString().padStart(2, '0') +
      new Date(birth).getFullYear().toString()
    );
  }

  async create(CreateApotekerDto: CreateApotekerDto) {
    const getDokter = await this.apotekerRepository.findOneBy({
      fullname: CreateApotekerDto.fullname,
    });

    if (getDokter)
      return new HttpException('dokter already exist', HttpStatus.CONFLICT);

    const username = 'apoteker-' + CreateApotekerDto.fullname.split(' ')[0];
    const password = this.createSimplePassword(
      new Date(CreateApotekerDto.tanggal_lahir),
      CreateApotekerDto.fullname.split(' ')[0],
    );

    const user = await this.userService.create({
      username: username,
      email: CreateApotekerDto.email,
      role: Role.DOKTER,
      password: password,
    });

    const dokter = await this.apotekerRepository.save({
      ...CreateApotekerDto,
      user,
    });

    delete dokter.user.password;
    return dokter;
  }

  findAll() {
    return this.apotekerRepository.find();
  }

  async findOne(id: string) {
    const dokter = await this.apotekerRepository.findOne({
      where: { id },
      relations: { user: true },
    });

    if (!dokter)
      return new HttpException('data is not found!', HttpStatus.NOT_FOUND);

    return dokter;
  }

  async update(id: string, UpdateApotekerDto: UpdateApotekerDto) {
    let admin = await this.apotekerRepository.findOne({
      where: { id },
      relations: { user: true },
    });

    const username = 'dokter-' + UpdateApotekerDto.fullname.split(' ')[0];
    const password = this.createSimplePassword(
      new Date(UpdateApotekerDto.tanggal_lahir),
      username,
    );

    const user = await this.userService.update(admin.user.id, {
      username: username,
      email: UpdateApotekerDto.email,
      role: Role.ADMIN,
      password: password,
    });

    UpdateApotekerDto.tanggal_lahir = new Date(UpdateApotekerDto.tanggal_lahir);
    admin = await this.apotekerRepository.save({
      ...admin,
      ...UpdateApotekerDto,
      user: user,
    });

    delete admin.user.password;
    return admin;
  }

  async remove(id: string) {
    const admin = await this.apotekerRepository.findOne({
      where: { id },
      relations: { user: true },
    });

    if (!admin)
      return new HttpException('data is not found!', HttpStatus.NOT_FOUND);

    this.apotekerRepository.remove(admin);
    this.userService.remove(admin.user.id);
  }
}
