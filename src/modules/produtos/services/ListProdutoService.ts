import { ParsedQs } from 'qs';
import { getCustomRepository } from 'typeorm';
import ProdutoRepository from '../typeorm/repositories/ProdutoRepository';
import Produto from '../typeorm/entities/Produto';
// import redisCache from '@shared/cache/RedisCache';

interface IPaginateProduto {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Produto[];
}

interface ISearch {
  nome?: string | ParsedQs | string[] | ParsedQs[] | undefined;
  order_nome?: string | ParsedQs | string[] | ParsedQs[] | undefined;
}

class ListProdutoService {
  public async execute(
    { nome, order_nome }: ISearch,
    connect: string,
  ): Promise<IPaginateProduto> {
    const produtosRepository = getCustomRepository(ProdutoRepository, connect);

    // const products = await redisCache.recover<IPaginateProduto>(
    //   'api-PRODUCT_LIST',
    // );

    // if (products) {
    //   return products as IPaginateProduto;
    // }

    const tmp = produtosRepository
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
      .where('Prod.excluir = :excluir', { excluir: 0 });

    if (nome) tmp.andWhere('Prod.nome like :nome', { nome: nome });

    if (order_nome === 'asc') tmp.addOrderBy('Prod.nome', 'ASC');

    if (order_nome === 'desc') tmp.addOrderBy('Prod.nome', 'DESC');

    const produtos = await tmp.paginate();

    // await redisCache.save('api-PRODUCT_LIST', produtos);

    return produtos as IPaginateProduto;
  }
}

export default ListProdutoService;
