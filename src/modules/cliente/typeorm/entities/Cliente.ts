import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

@Entity('clientes')
class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  senha: string;

  @Column()
  cnpj: string;

  @Column()
  ie: string;

  @Column()
  cpf: string;

  @Column()
  rg: string;

  @Column()
  telefone: string;

  @Column()
  celular: string;

  @Column()
  operadora: string;

  @Column({ nullable: true })
  nascim: Date;

  @Column()
  admin: boolean;

  @Column()
  @Exclude()
  excluir: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Cliente;
