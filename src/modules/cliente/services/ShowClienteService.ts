import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Cliente from '../typeorm/entities/Cliente';
import ClienteRepository from '../typeorm/repositories/ClienteRepository';
import { classToClass } from 'class-transformer';

interface IRequest {
  id: string;
}

class ShowClienteService {
  public async execute({ id }: IRequest): Promise<Cliente> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    const cliente = await clientesRepository.findOne(id);

    if (!cliente) {
      throw new AppError('Cliente not found.');
    }

    return classToClass(cliente);
  }
}

export default ShowClienteService;
