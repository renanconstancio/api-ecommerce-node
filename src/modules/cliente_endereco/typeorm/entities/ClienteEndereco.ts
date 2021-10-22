import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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
}

export default ClienteEndereco;
