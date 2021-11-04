import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import ProdutoSku from '@modules/produtos_skus/typeorm/entities/ProdutoSku';
import { Exclude } from 'class-transformer';
import Marca from '@modules/marca/typeorm/entities/Marca';
import ProdutoImg from '@modules/produtos_imgs/typeorm/entities/ProdutoImg';

@Entity('produtos')
class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_marcas: number;

  @Column()
  nome: string;

  @Column()
  subnome: string;

  @Column()
  descricao: string;

  @Column()
  postagem: string;

  @Column()
  ncm: string;

  @Column()
  csosn: string;

  @Column()
  cfop: string;

  @Column()
  cest: string;

  @Column()
  cst: string;

  @Column()
  unid: string;

  @Column()
  visivel: boolean;

  @Column()
  ativo: boolean;

  @Column()
  @Exclude()
  excluir: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => ProdutoSku, (skus: ProdutoSku) => skus.product)
  @JoinColumn({ name: 'id' })
  skus: ProdutoSku[];

  @OneToMany(() => ProdutoImg, (img: ProdutoImg) => img.product)
  @JoinColumn({ name: 'id' })
  prodimgs: ProdutoImg[];

  @OneToOne(() => Marca, (brand: Marca) => brand.id)
  @JoinColumn({ name: 'id_marcas' })
  brand: Marca;
}

export default Produto;
