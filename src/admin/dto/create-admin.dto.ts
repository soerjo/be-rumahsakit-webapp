import { AdminRole } from '../entities/admin.entity';

export class CreateAdminDto {
  fullname: string;
  tanggal_lahir: Date;
  email: string;
  phonenumber: number;
  role_admin: AdminRole;
}
