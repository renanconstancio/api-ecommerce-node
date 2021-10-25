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

    const produto = await produtosRepository.findOne(id);

    if (!produto) {
      throw new AppError('Not found.');
    }

    return produto;
  }
}

export default ShowProdutoService;
