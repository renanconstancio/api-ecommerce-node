import { getCustomRepository } from 'typeorm';
import Menu from '../typeorm/entities/Menu';
import MenuRepository from '../typeorm/repositories/MenuRepository';

interface IPaginateMenu {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Menu[];
}

class ListMenuService {
  public async execute(connect: string): Promise<IPaginateMenu> {
    const categoriasRepository = getCustomRepository(MenuRepository, connect);

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

    tmp.addOrderBy('categorias.ordem', 'DESC');
    tmp.addOrderBy('categorias_b.ordem', 'ASC');

    const categorias = await tmp.paginate();

    return categorias as IPaginateMenu;
  }
}

export default ListMenuService;
