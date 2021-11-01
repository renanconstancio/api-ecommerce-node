import { EntityRepository, In, Repository } from 'typeorm';
import Menu from '../entities/Menu';

interface IFindMenus {
  id: number;
}

@EntityRepository(Menu)
class MenuRepository extends Repository<Menu> {
  public async findByMenu(
    id_categorias: number,
    id_produtos: number,
  ): Promise<Menu | undefined> {
    const rws = this.findOne({
      where: {
        id_categorias,
        id_produtos,
      },
    });

    return rws;
  }

  public async findAllByIds(menus: IFindMenus[]): Promise<Menu[]> {
    const rwsIds = menus.map(menu => menu.id);

    const existMenus = await this.find({
      where: {
        id: In(rwsIds),
      },
    });

    return existMenus;
  }
}

export default MenuRepository;
