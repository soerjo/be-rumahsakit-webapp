import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { encryptString } from 'src/util/encrypt.util';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findUser(username: string) {
    return await this.usersRepository.findOne({ where: { username } });
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async create(createUserDto: CreateUserDto) {
    console.log({ password: createUserDto.password });
    createUserDto.password = encryptString(createUserDto.password);

    const getUser = await this.findUser(createUserDto.username);
    if (getUser) throw new BadRequestException('user already exists');

    const getUserByEmail = await this.findByEmail(createUserDto.email);
    if (getUserByEmail) throw new BadRequestException('email already exists');

    let user = await this.usersRepository.create(createUserDto);
    user = await this.usersRepository.save(user);

    return user;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
