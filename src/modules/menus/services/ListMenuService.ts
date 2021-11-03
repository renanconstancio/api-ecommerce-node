import { getCustomRepository } from 'typeorm';
import Menu from '../typeorm/entities/Menu';
import MenuRepository from '../typeorm/repositories/MenuRepository';

class ListMenuService {
  public async execute(connect: string): Promise<Menu[]> {
    const menusRepository = getCustomRepository(MenuRepository, connect);

    const tmp = menusRepository
      .createQueryBuilder('Menus')
      .innerJoinAndSelect('Menus.categoria', 'MenusA')
      .innerJoinAndSelect('Menus.children', 'MenusB')
      .innerJoinAndSelect('MenusB.categoria', 'MenusC');

    // console.log('SQL: %s', tmp.getSql());

    const categorias = await tmp.cache(true).getMany();
    return categorias as Menu[];
  }
}

export default ListMenuService;
