import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('categorias')
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

  @JoinColumn({ name: 'id_categorias' })
  @ManyToOne(() => Categoria, (categoria: Categoria) => categoria.children, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  parent: Categoria;

  @JoinColumn({ name: 'id' })
  @OneToMany(() => Categoria, (categorias: Categoria) => categorias.parent, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  children: Categoria[];
}

export default Categoria;
