import { Pasien } from 'src/pasien/entities/pasien.entity';
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Tagihan {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ManyToOne(() => Pasien, (pasien) => pasien.id)
  @JoinColumn()
  pasien: Pasien;

  @Column()
  keterangan: string;

  @Column()
  biaya_dokter: number;

  @Column()
  biaya_obat: number;

  @Column()
  total_obat: number;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
