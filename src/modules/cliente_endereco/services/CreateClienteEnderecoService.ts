import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { classToClass } from 'class-transformer';
import ClienteEndereco from '../typeorm/entities/ClienteEndereco';
import ClienteEndercoRepository from '../typeorm/repositories/ClienteEnderecoRepository';

interface IRequest {
  id_clientes: number;
  nome_endereco: string;
  nome_recebedor: string;
  endereco: string;
  nr: string;
  bairro: string;
  complemento: string;
  referencia: string;
  cidade: string;
  uf: string;
  cep: string;
  ativo?: boolean;
  excluir?: boolean;
}

class CreateClienteEnderecoService {
  public async execute({
    id_clientes,
    nome_endereco,
    nome_recebedor,
    endereco,
    nr,
    bairro,
    complemento,
    referencia,
    cidade,
    uf,
    cep,
    ativo = true,
    excluir = false,
  }: IRequest): Promise<ClienteEndereco> {
    const clienteEnderecoRepository = getCustomRepository(
      ClienteEndercoRepository,
    );

    if (!id_clientes) {
      throw new AppError(`Unselected customer`);
    }

    const cliente = clienteEnderecoRepository.create({
      id_clientes,
      nome_endereco,
      nome_recebedor,
      endereco,
      nr,
      bairro,
      complemento,
      referencia,
      cidade,
      uf,
      cep,
      ativo,
      excluir,
    });

    await clienteEnderecoRepository.save(cliente);

    return classToClass(cliente);
  }
}

export default CreateClienteEnderecoService;
