import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Cliente from '../typeorm/entities/Cliente';
import ClienteRepository from '../typeorm/repositories/ClienteRepository';

interface IRequest {
  id: string;
  nome: string;
  email: string;
  senha: string;
  cnpj: string;
  ie: string;
  cpf: string;
  rg: string;
  telefone: string;
  celular: string;
  operadora: string;
  nascim: Date;
  admin?: boolean;
  excluir?: boolean;
}

class UpdateClienteService {
  public async execute(
    {
      id,
      nome,
      email,
      senha,
      cnpj,
      ie,
      cpf,
      rg,
      telefone,
      celular,
      operadora,
      nascim,
      admin = false,
      excluir = false,
    }: IRequest,
    connect: string,
  ): Promise<Cliente> {
    const clientesRepository = getCustomRepository(ClienteRepository, connect);

    const cliente = await clientesRepository.findOne(id);

    if (!cliente) {
      throw new AppError('Clientes not found.');
    }

    cliente.nome = nome;
    cliente.email = email;
    cliente.senha = senha;
    cliente.cnpj = cnpj;
    cliente.ie = ie;
    cliente.cpf = cpf;
    cliente.rg = rg;
    cliente.telefone = telefone;
    cliente.celular = celular;
    cliente.operadora = operadora;
    cliente.nascim = nascim;
    cliente.admin = admin;
    cliente.excluir = excluir;

    await clientesRepository.save(cliente);

    return cliente;
  }
}

export default UpdateClienteService;
