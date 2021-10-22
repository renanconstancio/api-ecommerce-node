import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

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
}

export default Produto;
