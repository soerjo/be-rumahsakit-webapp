import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    return await this.usersRepository.findOne({
      where: { username },
      select: { password: true },
    });
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = encryptString(createUserDto.password);

    const getUser = await this.findUser(createUserDto.username);
    if (getUser) throw new BadRequestException('user already exists');

    const getUserByEmail = await this.findByEmail(createUserDto.email);
    if (getUserByEmail) throw new BadRequestException('email already exists');

    return await this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    updateUserDto.password = encryptString(updateUserDto.password);

    const user = await this.usersRepository.findOneBy({ id });

    const getUser = await this.findUser(updateUserDto.username);
    if (getUser && getUser.username !== updateUserDto.username)
      throw new BadRequestException('user already exists');

    return await this.usersRepository.save({ ...user, ...updateUserDto });
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) return new NotFoundException('data is not found!');

    return this.usersRepository.remove(user);
  }
}
