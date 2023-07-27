import { Pasien } from 'src/pasien/entities/pasien.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Dokter } from './dokter.entity';

@Entity()
export class Diagnosa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Pasien)
  @JoinColumn()
  pasien: Pasien;

  @ManyToOne(() => Dokter, (dokter) => dokter.id)
  @JoinColumn()
  dokter: Dokter;

  @Column()
  diagnosa: string;

  @Column()
  praktek: string;

  @Column()
  specialist: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
