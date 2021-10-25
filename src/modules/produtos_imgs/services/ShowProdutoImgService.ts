import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoImg from '../typeorm/entities/ProdutoImg';
import ProdutoImgRepository from '../typeorm/repositories/ProdutoImgRepository';

interface IRequest {
  id: string;
}

class ShowProdutoImgService {
  public async execute({ id }: IRequest, connect: string): Promise<ProdutoImg> {
    const imagesRepository = getCustomRepository(ProdutoImgRepository, connect);

    const image = await imagesRepository.findOne(id);

    if (!image) {
      throw new AppError('Not found.');
    }

    return image;
  }
}

export default ShowProdutoImgService;
