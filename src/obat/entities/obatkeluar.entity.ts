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
import { SatuanObat } from './obat.entity';

@Entity({ name: 'obatkeluar' })
export class ObatKeluar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pasien, (pasien) => pasien.id)
  @JoinColumn()
  pasien: Pasien;

  @Column()
  nama_obat: string;

  @Column()
  kandungan_obat: string;

  @Column()
  merek_obat: string;

  @Column()
  keterangan: string;

  @Column()
  qty_obat: number;

  @Column()
  satuan_obat: SatuanObat;

  @Column()
  harga_satuan: number;

  @Column('boolean', { default: false })
  confirmation: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
