import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Menu from '../typeorm/entities/Menu';
import MenuRepository from '../typeorm/repositories/MenuRepository';

interface IRequest {
  id_categorias: number;
  id_produtos: number;
}

class CreateMenuService {
  public async execute(
    { id_categorias, id_produtos }: IRequest,
    connect: string,
  ): Promise<Menu> {
    const categoriaRepository = getCustomRepository(MenuRepository, connect);

    const categoriaExists = await categoriaRepository.findByMenu(
      id_categorias,
      id_produtos,
    );

    if (categoriaExists) {
      throw new AppError('There is already one categoria with this categoria');
    }

    const rwsMenu = categoriaRepository.create({
      id_categorias,
      id_produtos,
    });

    await categoriaRepository.save(rwsMenu);

    return rwsMenu;
  }
}

export default CreateMenuService;
