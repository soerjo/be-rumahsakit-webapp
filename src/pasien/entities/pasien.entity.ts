import { Dokter } from 'src/dokter/entities/dokter.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Pasien {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  email?: string;

  @Column()
  phonenumber?: number;

  @ManyToOne(() => Dokter, (dokter) => dokter.id)
  @JoinColumn()
  dokter: Dokter;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
