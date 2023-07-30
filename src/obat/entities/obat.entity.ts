import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum SatuanObat {
  TABLET = 'TABLET',
  BOX = 'BOX',
  BOTOL = 'BOTOL',
  BUNGKUS = 'BUNGKUS/SASET',
  VIAL = 'VIAL',
}

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
  keterangan: string;

  @Column()
  qty_obat: number;

  @Column()
  satuan_obat: SatuanObat;

  @Column()
  harga_satuan: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
