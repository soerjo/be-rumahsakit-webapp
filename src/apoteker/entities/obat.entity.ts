import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Obat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama_obat: string;

  @Column()
  kandungan_obat: string;

  @Column()
  merek_obat: string;

  @Column()
  stock_obat: number;

  @Column()
  satuan_obat: string;

  @Column()
  harga_beli: number;

  @Column()
  harga_jual: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
