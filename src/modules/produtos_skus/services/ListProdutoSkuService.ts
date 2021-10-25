import { getCustomRepository } from 'typeorm';
import ProdutoRepository from '../typeorm/repositories/ProdutoSkuRepository';
import ProdutoSku from '../typeorm/entities/ProdutoSku';
import { ParsedQs } from 'qs';

interface IPaginateProdutoSku {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: ProdutoSku[];
}

interface ISearch {
  sku?: string | ParsedQs | string[] | ParsedQs[] | undefined;
  order_sku?: string | ParsedQs | string[] | ParsedQs[] | undefined;
}

class ListProdutoSkuService {
  public async execute(
    { sku, order_sku }: ISearch,
    connect: string,
  ): Promise<IPaginateProdutoSku> {
    const skusRepository = getCustomRepository(ProdutoRepository, connect);

    const tmp = skusRepository
      .createQueryBuilder()
      .where('excluir = :excluir', { excluir: 0 });

    if (sku) tmp.andWhere('sku like :sku', { sku: sku });

    if (order_sku === 'asc') tmp.orderBy({ sku: 'ASC' });

    if (order_sku === 'desc') tmp.orderBy({ sku: 'DESC' });

    const skus = await tmp.cache(true).paginate();

    return skus as IPaginateProdutoSku;
  }
}

export default ListProdutoSkuService;
