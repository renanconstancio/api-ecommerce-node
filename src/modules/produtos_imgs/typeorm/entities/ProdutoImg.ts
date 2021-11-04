import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import ProdutoSku from '@modules/produtos_skus/typeorm/entities/ProdutoSku';
import Produto from '@modules/produtos/typeorm/entities/Produto';

@Entity('produtos_imgs', { orderBy: { ordem: 'ASC' } })
class ProdutoImg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_produtos: number;

  @Column()
  id_produtos_skus: number;

  @Column()
  image: string;

  @Column()
  ordem: number;

  @Column()
  @Exclude()
  excluir: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Produto, (prod: Produto) => prod.prodimgs)
  @JoinColumn({ name: 'id_produtos' })
  product: Produto;

  @OneToOne(() => ProdutoSku, (skus: ProdutoSku) => skus.skuimgs)
  @JoinColumn({ name: 'id_produtos_skus' })
  skus: ProdutoSku;
}

export default ProdutoImg;
