import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CategoriaRepository from '../typeorm/repositories/CategoriaRepository';

interface IRequest {
  id: string;
}

class DeleteCategoriaService {
  public async execute({ id }: IRequest, connect: string): Promise<void> {
    const categoriaRepository = getCustomRepository(
      CategoriaRepository,
      connect,
    );

    const rws = await categoriaRepository.findOne(id);

    if (!rws) {
      throw new AppError('Marca not found.');
    }

    rws.excluir = true;

    await categoriaRepository.save(rws);
  }
}

export default DeleteCategoriaService;
