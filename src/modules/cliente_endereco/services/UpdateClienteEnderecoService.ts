import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClienteEndereco from '../typeorm/entities/ClienteEndereco';
import ClienteEndercoRepository from '../typeorm/repositories/ClienteEnderecoRepository';

interface IRequest {
  id: string;
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

class UpdateClienteEnderecoService {
  public async execute({
    id,
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
    const enderecosRepository = getCustomRepository(ClienteEndercoRepository);

    const cliEnderecos = await enderecosRepository.findOne(id);

    if (!cliEnderecos) {
      throw new AppError('address not found.');
    }

    cliEnderecos.id_clientes = id_clientes;
    cliEnderecos.nome_endereco = nome_endereco;
    cliEnderecos.nome_recebedor = nome_recebedor;
    cliEnderecos.endereco = endereco;
    cliEnderecos.nr = nr;
    cliEnderecos.bairro = bairro;
    cliEnderecos.complemento = complemento;
    cliEnderecos.referencia = referencia;
    cliEnderecos.cidade = cidade;
    cliEnderecos.uf = uf;
    cliEnderecos.cep = cep;
    cliEnderecos.ativo = ativo;
    cliEnderecos.excluir = excluir;

    await enderecosRepository.save(cliEnderecos);

    return cliEnderecos;
  }
}

export default UpdateClienteEnderecoService;
