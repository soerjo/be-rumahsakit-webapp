import { SatuanObat } from 'src/obat/entities/obat.entity';
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

@Entity()
export class Resep {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pasien, (pasien) => pasien.id)
  @JoinColumn()
  pasien: Pasien;

  @Column()
  kandungan_obat: string;

  @Column()
  qty_obat: number;

  @Column()
  satuan_obat: SatuanObat;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
