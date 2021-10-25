import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { classToClass } from 'class-transformer';
import ClienteEndereco from '../typeorm/entities/ClienteEndereco';
import ClienteEndercoRepository from '../typeorm/repositories/ClienteEnderecoRepository';

interface IRequest {
  id: string;
}

class ShowClienteEnderecoService {
  public async execute(
    { id }: IRequest,
    connect: string,
  ): Promise<ClienteEndereco> {
    const enderecosRepository = getCustomRepository(
      ClienteEndercoRepository,
      connect,
    );

    const endereco = await enderecosRepository.findOne(id);

    if (!endereco) {
      throw new AppError('address not found.');
    }

    return classToClass(endereco);
  }
}

export default ShowClienteEnderecoService;
