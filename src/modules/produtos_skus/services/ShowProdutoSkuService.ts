import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoSku from '../typeorm/entities/ProdutoSku';
import ProdutoSkuRepository from '../typeorm/repositories/ProdutoSkuRepository';

interface IRequest {
  id: string;
}

class ShowProdutoSkuService {
  public async execute({ id }: IRequest): Promise<ProdutoSku> {
    const skusRepository = getCustomRepository(ProdutoSkuRepository);

    const sku = await skusRepository.findOne(id);

    if (!sku) {
      throw new AppError('Not found.');
    }

    return sku;
  }
}

export default ShowProdutoSkuService;
