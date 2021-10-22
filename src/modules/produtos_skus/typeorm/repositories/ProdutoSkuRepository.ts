import { EntityRepository, In, Repository } from 'typeorm';
import ProdutoSku from '../entities/ProdutoSku';

interface IFindProdutosSkus {
  id: number;
}

@EntityRepository(ProdutoSku)
class ProdutoSkuRepository extends Repository<ProdutoSku> {
  public async findBySku(skus: string): Promise<ProdutoSku | undefined> {
    const sku = this.findOne({
      where: {
        skus,
      },
    });

    return sku;
  }

  // public async findBySku(skus: string): Promise<ProdutoSku | undefined> {
  //   const sku = this.findOne({
  //     where: {
  //       skus,
  //     },
  //   });

  //   return sku;
  // }

  public async findAllByIds(
    prodsku: IFindProdutosSkus[],
  ): Promise<ProdutoSku[]> {
    const prodSkuIds = prodsku.map(psku => psku.id);

    const existentSkuProd = await this.find({
      where: {
        id: In(prodSkuIds),
      },
    });

    return existentSkuProd;
  }
}

export default ProdutoSkuRepository;
