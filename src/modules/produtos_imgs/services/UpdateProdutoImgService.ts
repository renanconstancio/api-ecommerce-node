import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoImg from '../typeorm/entities/ProdutoImg';
import ProdutoImgRepository from '../typeorm/repositories/ProdutoImgRepository';

interface IRequest {
  id: string;
  ordem: number;
}

class UpdateProdutoImgService {
  public async execute(
    { id, ordem }: IRequest,
    connect: string,
  ): Promise<ProdutoImg> {
    const imageRepository = getCustomRepository(ProdutoImgRepository, connect);

    const images = await imageRepository.findOne(id);

    if (!images) {
      throw new AppError('Sku not found.');
    }

    imageRepository.merge(images, { ordem: ordem });

    await imageRepository.save(images);

    return images;
  }
}

export default UpdateProdutoImgService;
