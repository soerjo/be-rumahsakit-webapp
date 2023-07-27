import { Injectable } from '@nestjs/common';
import { CreateApotekerDto } from './dto/create-apoteker.dto';
import { UpdateApotekerDto } from './dto/update-apoteker.dto';

@Injectable()
export class ApotekerService {
  create(createApotekerDto: CreateApotekerDto) {
    return 'This action adds a new apoteker';
  }

  findAll() {
    return `This action returns all apoteker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apoteker`;
  }

  update(id: number, updateApotekerDto: UpdateApotekerDto) {
    return `This action updates a #${id} apoteker`;
  }

  remove(id: number) {
    return `This action removes a #${id} apoteker`;
  }
}
