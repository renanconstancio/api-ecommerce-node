import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoSku from '../typeorm/entities/ProdutoSku';
import ProdutoSkuRepository from '../typeorm/repositories/ProdutoSkuRepository';

interface IRequest {
  id: string;
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
  ativo?: boolean;
  visivel?: boolean;
  excluir?: boolean;
}

class UpdateProdutoSkuService {
  public async execute(
    {
      id,
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
    }: IRequest,
    connect: string,
  ): Promise<ProdutoSku> {
    const skusRepository = getCustomRepository(ProdutoSkuRepository, connect);

    const sku = await skusRepository.findOne(id);

    if (!sku) {
      throw new AppError('Sku not found.');
    }

    skusRepository.merge(sku, {
      id_produtos: id_produtos,
      skus: skus,
      codigo: codigo,
      codigo_barras: codigo_barras,
      referencia: referencia,
      estoque: estoque,
      preco_custo: preco_custo,
      preco_venda: preco_venda,
      preco_promo: preco_promo,
      altura: altura,
      largura: largura,
      comprimento: comprimento,
      peso: peso,
      excluir: excluir,
    });

    await skusRepository.save(sku);

    return sku;
  }
}

export default UpdateProdutoSkuService;
