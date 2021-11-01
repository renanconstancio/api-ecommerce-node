import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Categoria from '../typeorm/entities/Categoria';
import CategoriaRepository from '../typeorm/repositories/CategoriaRepository';

interface IRequest {
  id: string;
}

class ShowCategoriaService {
  public async execute(
    { id }: IRequest,
    connect: string,
  ): Promise<Categoria[]> {
    const categoriaRepository = getCustomRepository(
      CategoriaRepository,
      connect,
    );

    const rws = await categoriaRepository
      .createQueryBuilder('categorias')
      .leftJoinAndSelect(
        'categorias.children',
        'categorias_b',
        'categorias_b.excluir = 0',
      )
      .andWhere('categorias.id = :id', { id: id })
      .getMany();

    if (!rws) {
      throw new AppError('Categoria not found.');
    }

    return rws;
  }
}

export default ShowCategoriaService;
