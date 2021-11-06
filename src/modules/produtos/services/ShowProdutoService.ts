import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Produto from '../typeorm/entities/Produto';
import ProdutoRepository from '../typeorm/repositories/ProdutoRepository';

interface IRequest {
  id: string;
}

class ShowProdutoService {
  public async execute({ id }: IRequest, connect: string): Promise<Produto> {
    const produtosRepository = getCustomRepository(ProdutoRepository, connect);

    const produto = await produtosRepository
      .createQueryBuilder('Prod')
      .innerJoinAndSelect('Prod.brand', 'BrandP')
      .innerJoinAndSelect('Prod.skus', 'SkuP')
      .leftJoinAndSelect(
        'SkuP.skuimgs',
        'SkuPImg',
        'SkuPImg.id_produtos_skus IS NOT NULL',
      )
      .leftJoinAndSelect(
        'Prod.prodimgs',
        'ProdImg',
        'ProdImg.id_produtos_skus IS NULL',
      )
      .where('Prod.id = :id', { id: id })
      .getOne();

    if (!produto) {
      throw new AppError('Product not found.');
    }

    return produto as Produto;
  }
}

export default ShowProdutoService;
