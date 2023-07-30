import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

import { Admin } from './entities/admin.entity';
import { Role } from 'src/user/entities/user.entity';

import { UserService } from 'src/user/user.service';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepo: Repository<Admin>,
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

  async create(createAdminDto: CreateAdminDto) {
    const username = 'amdin-' + createAdminDto.fullname.split(' ')[0];
    const password = this.createSimplePassword(
      new Date(createAdminDto.tanggal_lahir),
      createAdminDto.fullname.split(' ')[0],
    );

    const user = await this.userService.create({
      username: username,
      email: createAdminDto.email,
      role: Role.ADMIN,
      password: password,
    });

    createAdminDto.tanggal_lahir = new Date(createAdminDto.tanggal_lahir);
    const admin = await this.adminRepo.save({
      ...createAdminDto,
      user: user,
    });

    delete admin.user.password;

    return admin;
  }

  findAll() {
    return this.adminRepo.find();
  }

  async findOne(id: string) {
    const admin = await this.adminRepo.findOne({
      where: { id },
      relations: { user: true },
    });

    if (!admin)
      return new HttpException(
        { status: HttpStatus.NOT_FOUND, error: 'data is not found!' },
        HttpStatus.NOT_FOUND,
      );

    return admin;
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    let admin = await this.adminRepo.findOne({
      where: { id },
      relations: { user: true },
    });

    const username = updateAdminDto.fullname.split(' ')[0];
    const password = this.createSimplePassword(
      new Date(updateAdminDto.tanggal_lahir),
      username,
    );

    const user = await this.userService.update(admin.user.id, {
      username: username,
      email: updateAdminDto.email,
      role: Role.ADMIN,
      password: password,
    });

    updateAdminDto.tanggal_lahir = new Date(updateAdminDto.tanggal_lahir);
    admin = await this.adminRepo.save({
      ...admin,
      ...updateAdminDto,
      user: user,
    });

    delete admin.user.password;
    return admin;
  }

  async remove(id: string) {
    const admin = await this.adminRepo.findOne({
      where: { id },
      relations: { user: true },
    });

    if (!admin) return new NotFoundException('data is not found!');

    this.adminRepo.remove(admin);
    this.userService.remove(admin.user.id);
  }
}
