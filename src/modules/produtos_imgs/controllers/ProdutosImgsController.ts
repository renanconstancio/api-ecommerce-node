import { Request, Response } from 'express';

import { classToClass } from 'class-transformer';
import ListProdutoImgService from '../services/ListProdutoImgService';
import ShowProdutoImgService from '../services/ShowProdutoImgService';
import CreateProdutoImgService from '../services/CreateProdutoImgService';
import UpdateProdutoImgService from '../services/UpdateProdutoImgService';
import DeleteProdutoImgService from '../services/DeleteProdutoImgService';

export default class ProdutosImgsController {
  public async index(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const listImgs = new ListProdutoImgService();
    const images = await listImgs.execute(connect);

    return response.json(classToClass(images));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { id } = request.params;
    const showProductImg = new ShowProdutoImgService();
    const image = await showProductImg.execute({ id }, connect);

    return response.json(classToClass(image));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { id_produtos, id_produtos_skus, image, ordem, excluir } =
      request.body;
    const createProduto = new CreateProdutoImgService();
    const marcaResp = await createProduto.execute(
      {
        id_produtos,
        id_produtos_skus,
        image,
        ordem,
        excluir,
      },
      connect,
    );

    return response.json(classToClass(marcaResp));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { id_produtos, id_produtos_skus, image, ordem, excluir } =
      request.body;
    const { id } = request.params;
    const updateImages = new UpdateProdutoImgService();
    const images = await updateImages.execute(
      {
        id,
        id_produtos,
        id_produtos_skus,
        image,
        ordem,
        excluir,
      },
      connect,
    );

    return response.json(classToClass(images));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { id } = request.params;
    const deleteImages = new DeleteProdutoImgService();

    await deleteImages.execute({ id }, connect);

    return response.json([]);
  }
}
