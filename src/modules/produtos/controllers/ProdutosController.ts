import { Request, Response } from 'express';
import ListProdutoService from '../services/ListProdutoService';
import ShowProdutoService from '../services/ShowProdutoService';
import CreateProdutoService from '../services/CreateProdutoService';
import DeleteProdutoService from '../services/DeleteProdutoService';
import UpdateProdutoService from '../services/UpdateProdutoService';
import { classToClass } from 'class-transformer';

export default class ProdutosController {
  public async index(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { nome, order_nome } = request.query;

    const listProdutos = new ListProdutoService();
    const produtos = await listProdutos.execute({ nome, order_nome }, connect);

    return response.json(classToClass(produtos));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { id } = request.params;

    const showProduct = new ShowProdutoService();
    const produto = await showProduct.execute({ id }, connect);

    return response.json(classToClass(produto));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const {
      id_marcas,
      nome,
      subnome,
      descricao,
      postagem,
      ncm,
      csosn,
      cfop,
      cest,
      cst,
      unid,
      ativo,
      visivel,
      excluir,
    } = request.body;
    const createProduto = new CreateProdutoService();
    const marcaResp = await createProduto.execute(
      {
        id_marcas,
        nome,
        subnome,
        descricao,
        postagem,
        ncm,
        csosn,
        cfop,
        cest,
        cst,
        unid,
        ativo,
        visivel,
        excluir,
      },
      connect,
    );
    return response.json(classToClass(marcaResp));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const {
      id_marcas,
      nome,
      subnome,
      descricao,
      postagem,
      ncm,
      csosn,
      cfop,
      cest,
      cst,
      unid,
      ativo,
      visivel,
      excluir,
    } = request.body;
    const { id } = request.params;
    const updateProduto = new UpdateProdutoService();
    const produtos = await updateProduto.execute(
      {
        id,
        id_marcas,
        nome,
        subnome,
        descricao,
        postagem,
        ncm,
        csosn,
        cfop,
        cest,
        cst,
        unid,
        ativo,
        visivel,
        excluir,
      },
      connect,
    );
    return response.json(classToClass(produtos));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { id } = request.params;
    const deleteProduto = new DeleteProdutoService();

    await deleteProduto.execute({ id }, connect);

    return response.json([]);
  }
}
