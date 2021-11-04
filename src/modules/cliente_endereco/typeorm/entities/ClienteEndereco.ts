import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Cliente from '@modules/cliente/typeorm/entities/Cliente';
import { Exclude } from 'class-transformer';

@Entity('clientes_enderecos')
class ClienteEndereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_clientes: number;

  @Column()
  nome_endereco: string;

  @Column()
  nome_recebedor: string;

  @Column()
  endereco: string;

  @Column()
  nr: string;

  @Column()
  bairro: string;

  @Column()
  complemento: string;

  @Column()
  referencia: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  cep: string;

  @Column()
  ativo: boolean;

  @Column()
  @Exclude()
  excluir: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Cliente, (cliente: Cliente) => cliente.address)
  @JoinColumn({ name: 'id' })
  client: Cliente;
}

export default ClienteEndereco;
