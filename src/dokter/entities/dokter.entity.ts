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

@Entity()
export class Dokter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  email?: string;

  @Column({ type: 'bigint' })
  phonenumber?: number;

  @Column()
  specialist?: string;

  @Column()
  tanggal_lahir: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user?: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
