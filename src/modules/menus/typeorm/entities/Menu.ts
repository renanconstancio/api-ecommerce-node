import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('menus')
class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_categorias: number;

  @Column()
  id_produtos: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @JoinColumn({ name: 'id_categorias' })
  // @ManyToOne(() => Categoria, (categoria: Categoria) => categoria.children, {
  //   onDelete: 'CASCADE',
  //   onUpdate: 'CASCADE',
  //   nullable: true,
  // })
  // parent: Categoria;

  // @JoinColumn({ name: 'id' })
  // @OneToMany(() => Menu, (categorias: Menu) => categorias.parent, {
  //   onDelete: 'CASCADE',
  //   onUpdate: 'CASCADE',
  //   nullable: true,
  // })
  // children: Menu[];
}

export default Menu;
