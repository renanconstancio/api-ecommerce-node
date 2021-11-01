import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import MenuRepository from '../typeorm/repositories/MenuRepository';

interface IRequest {
  id: string;
}

class DeleteMenuService {
  public async execute({ id }: IRequest, connect: string): Promise<void> {
    const categoriaRepository = getCustomRepository(MenuRepository, connect);

    const rws = await categoriaRepository.findOne(id);

    if (!rws) {
      throw new AppError('Menus not found.');
    }

    await categoriaRepository.remove(rws);
  }
}

export default DeleteMenuService;
