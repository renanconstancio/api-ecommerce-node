import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Cliente from '../typeorm/entities/Cliente';
import ClienteRepository from '../typeorm/repositories/ClienteRepository';
import { classToClass } from 'class-transformer';
import { hash } from 'bcryptjs';

interface IRequest {
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
  nascim?: Date;
  admin?: boolean;
  excluir?: boolean;
}

class CreateClienteService {
  public async execute(
    {
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
    const emailExists = await clientesRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError(`Já existe um e-mail cadastrado com ${email}`);
    }

    const senhaHash = await hash(senha, 8);

    const cliente = clientesRepository.create({
      nome,
      email,
      senha: senhaHash,
      cnpj,
      ie,
      cpf,
      rg,
      telefone,
      celular,
      operadora,
      nascim,
      admin,
      excluir,
    });

    await clientesRepository.save(cliente);

    return classToClass(cliente);
  }
}

export default CreateClienteService;
