import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm';
import Categoria from '@modules/categorias/typeorm/entities/Categoria';
import { Exclude } from 'class-transformer';

@Entity('menus')
class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_menus: number | null;

  @Column()
  id_categorias: number;

  @Column()
  id_produtos: number;

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;

  @TreeParent()
  @JoinColumn({ name: 'id_menus' })
  parent: Menu;

  @TreeChildren()
  @JoinColumn({ name: 'id' })
  children: Menu[];

  @OneToOne(() => Categoria, (categoria: Categoria) => categoria.id)
  @JoinColumn({ name: 'id_categorias' })
  categoria: Categoria;
}

export default Menu;
