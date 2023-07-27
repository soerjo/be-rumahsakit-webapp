import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Dokter } from './dokter.entity';

@Entity()
export class Praktek {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama_praktek: string;

  @ManyToOne(() => Dokter, (dokter) => dokter.id)
  @JoinColumn()
  dokter: Dokter;

  @Column()
  biaya: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
