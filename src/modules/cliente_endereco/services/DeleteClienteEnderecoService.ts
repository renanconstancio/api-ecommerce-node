import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClienteEndercoRepository from '../typeorm/repositories/ClienteEnderecoRepository';

interface IRequest {
  id: string;
}

class DeleteClienteEnderecoService {
  public async execute({ id }: IRequest, connect: string): Promise<void> {
    const enderecosRepository = getCustomRepository(
      ClienteEndercoRepository,
      connect,
    );

    const endereco = await enderecosRepository.findOne(id);

    if (!endereco) {
      throw new AppError('address not found.');
    }

    endereco.excluir = true;

    await enderecosRepository.save(endereco);
  }
}

export default DeleteClienteEnderecoService;
