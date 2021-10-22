// import redisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoSkuRepository from '../typeorm/repositories/ProdutoSkuRepository';
import ProdutoSku from '../typeorm/entities/ProdutoSku';

interface IRequest {
  id_produtos: number;
  skus: string;
  codigo: string;
  codigo_barras: string;
  referencia: string;
  estoque: number;
  preco_custo: number;
  preco_venda: number;
  preco_promo: number;
  altura: number;
  largura: number;
  comprimento: number;
  peso: number;
  excluir?: boolean;
}

class CreateProdutoSkuService {
  public async execute({
    id_produtos,
    skus,
    codigo,
    codigo_barras,
    referencia,
    estoque,
    preco_custo,
    preco_venda,
    preco_promo,
    altura,
    largura,
    comprimento,
    peso,
    excluir = false,
  }: IRequest): Promise<ProdutoSku> {
    const skusRepository = getCustomRepository(ProdutoSkuRepository);
    const skusExists = await skusRepository.findBySku(skus);

    if (skusExists) {
      throw new AppError('There is already one sku name');
    }

    if (!id_produtos) {
      throw new AppError('Select one product');
    }

    const sku = skusRepository.create({
      id_produtos,
      skus,
      codigo,
      codigo_barras,
      referencia,
      estoque,
      preco_custo,
      preco_venda,
      preco_promo,
      altura,
      largura,
      comprimento,
      peso,
      excluir,
    });

    await skusRepository.save(sku);

    return sku;
  }
}

export default CreateProdutoSkuService;
