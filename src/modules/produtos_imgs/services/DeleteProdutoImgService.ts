import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoImgRepository from '../typeorm/repositories/ProdutoImgRepository';

interface IRequest {
  id: string;
}

class DeleteProdutoImgService {
  public async execute({ id }: IRequest, connect: string): Promise<void> {
    const imgsRepository = getCustomRepository(ProdutoImgRepository, connect);

    const image = await imgsRepository.findOne(id);

    if (!image) {
      throw new AppError('Not found.');
    }

    image.excluir = true;

    await imgsRepository.save(image);
  }
}

export default DeleteProdutoImgService;
