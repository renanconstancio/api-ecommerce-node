import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

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
}

export default ProdutoSku;
