import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Menu from '../typeorm/entities/Menu';
import MenuRepository from '../typeorm/repositories/MenuRepository';
import CategoriaRepository from '@modules/categorias/typeorm/repositories/CategoriaRepository';

interface IRequest {
  id_categorias: number;
  id_produtos: number;
}

class CreateMenuService {
  public async execute(
    { id_categorias, id_produtos }: IRequest,
    connect: string,
  ): Promise<Menu | undefined> {
    let id_menus: number | null = null;

    const menuRepository = getCustomRepository(MenuRepository, connect);

    // Verificar se o menu existe
    const menusExists = await menuRepository.findByMenu(
      id_categorias,
      id_produtos,
    );

    if (menusExists) {
      throw new AppError('There is already one categoria with this categoria');
    }

    // Verificar se a categoria de menu principal existe
    const categoriaRepository = getCustomRepository(
      CategoriaRepository,
      connect,
    );

    // Verificar se o menu parent existe
    const categoriaPrincipal = await categoriaRepository.findOne(id_categorias);

    if (categoriaPrincipal) {
      const idCategoriaParent = categoriaPrincipal.id_categorias;

      // Verificar se o menu existe
      const categoriaExists = await menuRepository.findByMenu(
        idCategoriaParent,
        id_produtos,
      );

      // Verificar se o menu não existe
      if (!categoriaExists) {
        const addMenuPrincipal = menuRepository.create({
          id_categorias: idCategoriaParent,
          id_produtos,
        });
        await menuRepository.save(addMenuPrincipal);

        id_menus = addMenuPrincipal.id;
      }

      // Verificar se o menu existe
      if (categoriaExists) {
        id_menus = categoriaExists.id;
      }
    }

    const rwsMenu = menuRepository.create({
      id_menus,
      id_categorias,
      id_produtos,
    });

    await menuRepository.save(rwsMenu);

    return rwsMenu;
  }
}

export default CreateMenuService;
