import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoImg from '../typeorm/entities/ProdutoImg';
import ProdutoImgRepository from '../typeorm/repositories/ProdutoImgRepository';

interface IRequest {
  id: string;
  id_produtos: number;
  id_produtos_skus: number;
  image: string;
  ordem: number;
  excluir?: boolean;
}

class UpdateProdutoImgService {
  public async execute({
    id,
    id_produtos,
    id_produtos_skus,
    image,
    ordem,
    excluir = false,
  }: IRequest): Promise<ProdutoImg> {
    const imageRepository = getCustomRepository(ProdutoImgRepository);

    const images = await imageRepository.findOne(id);

    if (!images) {
      throw new AppError('Sku not found.');
    }

    imageRepository.merge(images, {
      id_produtos: id_produtos,
      id_produtos_skus: id_produtos_skus,
      image: image,
      ordem: ordem,
      excluir: excluir,
    });

    await imageRepository.save(images);

    return images;
  }
}

export default UpdateProdutoImgService;
