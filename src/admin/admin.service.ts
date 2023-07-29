import { Injectable } from '@nestjs/common';
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
      new Date(birth).getMonth().toString().padStart(2, '0') +
      new Date(birth).getFullYear().toString()
    );
  }

  async create(createAdminDto: CreateAdminDto) {
    const username = createAdminDto.fullname.split(' ')[0];
    const password = this.createSimplePassword(
      new Date(createAdminDto.tanggal_lahir),
      username,
    );

    const user = await this.userService.create({
      username: username,
      email: createAdminDto.email,
      role: Role.ADMIN,
      password: password,
    });

    createAdminDto.tanggal_lahir = new Date(createAdminDto.tanggal_lahir);
    let admin = await this.adminRepo.create({
      ...createAdminDto,
      user: user,
    });
    admin = await this.adminRepo.save(admin);

    return admin;
  }

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
