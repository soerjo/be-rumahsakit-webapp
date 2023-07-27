import { Pasien } from 'src/pasien/entities/pasien.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Obat } from './obat.entity';

@Entity()
export class ObatKeluar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pasien, (pasien) => pasien.id)
  @JoinColumn()
  pasien: Pasien;

  @ManyToOne(() => Obat, (obat) => obat.id)
  @JoinColumn()
  obat?: Obat;

  @Column()
  kandungan_obat: string;

  @Column()
  dosis_obat: number;

  @Column()
  satuan_obat: string;

  @Column('boolean', { default: false })
  confirmation: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
