import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AdminRole {
  SUPER = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
}

@Entity()
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  email?: string;

  @Column()
  tanggal_lahir: Date;

  @Column()
  role_admin?: AdminRole;

  @Column({ type: 'bigint' })
  phonenumber?: number;

  @OneToOne(() => User)
  @JoinColumn()
  user?: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
