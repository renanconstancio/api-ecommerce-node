import { Request, Response } from 'express';
import ListProdutoSkuService from '../services/ListProdutoSkuService';
import ShowProdutoSkuService from '../services/ShowProdutoSkuService';
import CreateProdutoSkuService from '../services/CreateProdutoSkuService';
import UpdateProdutoSkuService from '../services/UpdateProdutoSkuService';
import DeleteProdutoSkuService from '../services/DeleteProdutoSkuService';
import { classToClass } from 'class-transformer';

export default class ProdutosSkusController {
  public async index(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { sku, order_sku } = request.query;

    const listSkus = new ListProdutoSkuService();
    const produtoSkus = await listSkus.execute({ sku, order_sku }, connect);

    return response.json(classToClass(produtoSkus));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { id } = request.params;
    const showProductSku = new ShowProdutoSkuService();
    const produtoSku = await showProductSku.execute({ id }, connect);

    return response.json(classToClass(produtoSku));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

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
    const produtoskus = await createProduto.execute(
      {
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
      },
      connect,
    );

    return response.json(classToClass(produtoskus));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

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
    const updateProdutoSku = new UpdateProdutoSkuService();
    const produtoSkus = await updateProdutoSku.execute(
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
        excluir,
      },
      connect,
    );

    return response.json(classToClass(produtoSkus));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { id } = request.params;
    const deleteProdutoSku = new DeleteProdutoSkuService();

    await deleteProdutoSku.execute({ id }, connect);

    return response.json([]);
  }
}
