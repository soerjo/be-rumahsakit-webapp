import { Admin } from 'src/admin/entities/admin.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Role {
  ADMIN = 'ADMIN',
  DOKTER = 'DOKTER',
  APOTEKER = 'APOTEKER',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  role: Role;

  @OneToOne(() => Admin, (admin) => admin.id, {
    cascade: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  admin?: Admin;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
