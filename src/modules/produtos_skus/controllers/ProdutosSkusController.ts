import { Request, Response } from 'express';
import ListProdutoSkuService from '../services/ListProdutoSkuService';
import ShowProdutoSkuService from '../services/ShowProdutoSkuService';
import CreateProdutoSkuService from '../services/CreateProdutoService';
import UpdateProdutoSkuService from '../services/UpdateProdutoSkuService';
import DeleteProdutoSkuService from '../services/DeleteProdutoSkuService';
import { classToClass } from 'class-transformer';

export default class ProdutosSkusController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { sku, order_sku } = request.query;

    const listSkus = new ListProdutoSkuService();
    const produtos = await listSkus.execute({ sku, order_sku });

    return response.json(classToClass(produtos));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showProduct = new ShowProdutoSkuService();
    const produto = await showProduct.execute({ id });

    return response.json(classToClass(produto));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;
    const createProduto = new CreateProdutoSkuService();
    const marcaResp = await createProduto.execute({
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
    return response.json(classToClass(marcaResp));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
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
    } = request.body;
    const { id } = request.params;
    const updateProduto = new UpdateProdutoSkuService();
    const produtos = await updateProduto.execute({
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
      excluir,
    });
    return response.json(classToClass(produtos));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProduto = new DeleteProdutoSkuService();

    await deleteProduto.execute({ id });

    return response.json([]);
  }
}
