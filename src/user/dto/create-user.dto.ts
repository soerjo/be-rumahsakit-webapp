import { Role } from '../entities/user.entity';

export class CreateUserDto {
  id?: string;
  username: string;
  email: string;
  role: Role;
  password: string;
}
