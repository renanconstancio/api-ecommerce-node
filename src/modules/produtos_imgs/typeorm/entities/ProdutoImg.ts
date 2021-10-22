import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('produtos_imgs')
class ProdutoImg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
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
}

export default ProdutoImg;
