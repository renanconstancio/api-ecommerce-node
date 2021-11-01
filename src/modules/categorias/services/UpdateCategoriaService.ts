import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Categoria from '../typeorm/entities/Categoria';
import CategoriaRepository from '../typeorm/repositories/CategoriaRepository';

interface IRequest {
  id: string;
  id_categorias: number;
  categoria: string;
  description: string;
  keywords: string;
  icon: string;
  ordem: number;
  visivel?: boolean;
  excluir?: boolean;
}

class UpdateCategoriaService {
  public async execute(
    {
      id,
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
    const categoriasRepository = getCustomRepository(
      CategoriaRepository,
      connect,
    );

    const categorias = await categoriasRepository.findOne(id);

    if (!categorias) {
      throw new AppError('Marcas not found.');
    }

    categorias.id_categorias = id_categorias;
    categorias.categoria = categoria;
    categorias.description = description;
    categorias.ordem = ordem;
    categorias.keywords = keywords;
    categorias.icon = icon;
    categorias.visivel = visivel;
    categorias.excluir = excluir;

    await categoriasRepository.save(categorias);

    return categorias;
  }
}

export default UpdateCategoriaService;
