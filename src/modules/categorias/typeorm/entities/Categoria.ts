import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  TreeChildren,
  TreeParent,
  JoinColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('categorias', { orderBy: { ordem: 'ASC' } })
class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_categorias: number;

  @Column()
  categoria: string;

  @Column()
  description: string;

  @Column()
  keywords: string;

  @Column()
  icon: string;

  @Column()
  ordem: number;

  @Column()
  visivel: boolean;

  @Column()
  @Exclude()
  excluir: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @TreeChildren()
  @JoinColumn({ name: 'id' })
  children: Categoria[];

  @TreeParent()
  @JoinColumn({ name: 'id_categorias' })
  parent: Categoria;
}

export default Categoria;
