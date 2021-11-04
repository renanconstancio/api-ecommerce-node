import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import ClienteEndereco from '@modules/cliente_endereco/typeorm/entities/ClienteEndereco';

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

  @OneToMany(
    () => ClienteEndereco,
    (address: ClienteEndereco) => address.client,
  )
  @JoinColumn({ name: 'id_clientes' })
  address: ClienteEndereco[];
}

export default Cliente;
