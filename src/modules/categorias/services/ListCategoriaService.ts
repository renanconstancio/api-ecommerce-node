import { getCustomRepository } from 'typeorm';
import Categoria from '../typeorm/entities/Categoria';
import CategoriaRepository from '../typeorm/repositories/CategoriaRepository';
import { ParsedQs } from 'qs';

interface IPaginateCategoria {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Categoria[];
}

interface ISearch {
  categoria: string | ParsedQs | string[] | ParsedQs[] | undefined;
  order: string | ParsedQs | string[] | ParsedQs[] | undefined;
}

class ListCategoriaService {
  public async execute(
    { categoria, order = 'ASC' }: ISearch,
    connect: string,
  ): Promise<IPaginateCategoria> {
    const categoriasRepository = getCustomRepository(
      CategoriaRepository,
      connect,
    );

    const tmp = categoriasRepository
      .createQueryBuilder('categorias')
      .leftJoinAndSelect(
        'categorias.children',
        'categorias_b',
        'categorias_b.excluir = 0',
      )
      .andWhere(
        'categorias.excluir = :excluir and categorias.id_categorias IS NULL',
        { excluir: 0 },
      );

    if (categoria) {
      tmp.andWhere('categorias.categoria like :categoria', {
        categoria: categoria,
      });
    }

    if (order === 'DESC') {
      tmp.addOrderBy('categorias.ordem', 'DESC');
      tmp.addOrderBy('categorias_b.ordem', 'ASC');
    }

    if (order === 'ASC') {
      tmp.addOrderBy('categorias.ordem', 'ASC');
      tmp.addOrderBy('categorias_b.ordem', 'ASC');
    }

    const categorias = await tmp.paginate();

    return categorias as IPaginateCategoria;
  }
}

export default ListCategoriaService;
