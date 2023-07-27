import { Praktek } from 'src/dokter/entities/praktek.entity';

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

  @Column()
  tanggal_lahir?: Date;

  @Column()
  tinggi?: number;

  @Column()
  berat_badan?: number;

  @Column()
  diagnosa?: string;

  @ManyToOne(() => Praktek, (praktek) => praktek.id)
  @JoinColumn()
  praktek: Praktek;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
