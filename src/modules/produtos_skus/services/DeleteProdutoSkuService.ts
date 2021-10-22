import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoSkuRepository from '../typeorm/repositories/ProdutoSkuRepository';

interface IRequest {
  id: string;
}

class DeleteProdutoSkuService {
  public async execute({ id }: IRequest): Promise<void> {
    const skusRepository = getCustomRepository(ProdutoSkuRepository);

    const sku = await skusRepository.findOne(id);

    if (!sku) {
      throw new AppError('Not found.');
    }

    sku.excluir = true;

    await skusRepository.save(sku);

    // await marcasRepository.remove(marca);
  }
}

export default DeleteProdutoSkuService;
