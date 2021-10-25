import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ClienteRepository from '../typeorm/repositories/ClienteRepository';

interface IRequest {
  id: string;
}

class DeleteClienteService {
  public async execute({ id }: IRequest, connect: string): Promise<void> {
    const clientesRepository = getCustomRepository(ClienteRepository, connect);

    const cliente = await clientesRepository.findOne(id);

    if (!cliente) {
      throw new AppError('Marca not found.');
    }

    cliente.excluir = true;

    await clientesRepository.save(cliente);

    // await marcasRepository.remove(marca);
  }
}

export default DeleteClienteService;
