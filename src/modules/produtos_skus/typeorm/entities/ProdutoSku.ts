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
import { Exclude } from 'class-transformer';
import Produto from '@modules/produtos/typeorm/entities/Produto';
import ProdutoImg from '@modules/produtos_imgs/typeorm/entities/ProdutoImg';

@Entity('produtos_skus')
class ProdutoSku {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  id_produtos: number;

  @Column()
  skus: string;

  @Column()
  codigo: string;

  @Column()
  codigo_barras: string;

  @Column()
  referencia: string;

  @Column('int')
  estoque: number;

  @Column('decimal')
  preco_custo: number;

  @Column('decimal')
  preco_venda: number;

  @Column('decimal')
  preco_promo: number;

  @Column('int')
  altura: number;

  @Column('int')
  largura: number;

  @Column('int')
  comprimento: number;

  @Column('decimal')
  peso: number;

  @Column()
  @Exclude()
  excluir: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Produto, (prod: Produto) => prod.skus)
  @JoinColumn({ name: 'id_produtos' })
  product: Produto;

  @OneToMany(() => ProdutoImg, (img: ProdutoImg) => img.skus)
  @JoinColumn({ name: 'id_produtos_skus' })
  skuimgs: ProdutoImg[];
}

export default ProdutoSku;
