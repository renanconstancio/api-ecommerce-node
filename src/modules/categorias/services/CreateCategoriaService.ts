import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Categoria from '../typeorm/entities/Categoria';
import CategoriaRepository from '../typeorm/repositories/CategoriaRepository';

interface IRequest {
  id_categorias: number;
  categoria: string;
  description?: string;
  keywords?: string;
  icon?: string;
  ordem: number;
  visivel: boolean;
  excluir: boolean;
}

class CreateCategoriaService {
  public async execute(
    {
      id_categorias,
      categoria,
      description,
      keywords,
      icon,
      ordem,
      visivel = true,
      excluir = false,
    }: IRequest,
    connect: string,
  ): Promise<Categoria> {
    const categoriaRepository = getCustomRepository(
      CategoriaRepository,
      connect,
    );
    const categoriaExists = await categoriaRepository.findByCategoria(
      categoria,
    );

    if (categoriaExists) {
      throw new AppError('There is already one categoria with this categoria');
    }

    const rwsCategoria = categoriaRepository.create({
      id_categorias,
      categoria,
      description,
      keywords,
      icon,
      ordem,
      visivel,
      excluir,
    });

    await categoriaRepository.save(rwsCategoria);

    return rwsCategoria;
  }
}

export default CreateCategoriaService;
