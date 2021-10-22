import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoRepository from '../typeorm/repositories/ProdutoRepository';

interface IRequest {
  id: string;
}

class DeleteProdutoService {
  public async execute({ id }: IRequest): Promise<void> {
    const produtosRepository = getCustomRepository(ProdutoRepository);

    const produto = await produtosRepository.findOne(id);

    if (!produto) {
      throw new AppError('Not found.');
    }

    produto.excluir = true;

    await produtosRepository.save(produto);

    // await marcasRepository.remove(marca);
  }
}

export default DeleteProdutoService;
