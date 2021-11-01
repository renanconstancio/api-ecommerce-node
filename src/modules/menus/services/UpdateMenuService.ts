import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Categoria from '../typeorm/entities/Menu';
import CategoriaRepository from '../typeorm/repositories/MenuRepository';

interface IRequest {
  id: string;
  id_categorias: number;
  id_produtos: number;
}

class UpdateCategoriaService {
  public async execute(
    { id, id_categorias, id_produtos }: IRequest,
    connect: string,
  ): Promise<Categoria> {
    const categoriasRepository = getCustomRepository(
      CategoriaRepository,
      connect,
    );

    const categorias = await categoriasRepository.findOne(id);

    if (!categorias) {
      throw new AppError('Marcas not found.');
    }

    categorias.id_categorias = id_categorias;
    categorias.id_produtos = id_produtos;

    await categoriasRepository.save(categorias);

    return categorias;
  }
}

export default UpdateCategoriaService;
