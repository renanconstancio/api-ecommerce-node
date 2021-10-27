import { Request, Response } from 'express';

import { classToClass } from 'class-transformer';
import ListProdutoImgService from '../services/ListProdutoImgService';
import ShowProdutoImgService from '../services/ShowProdutoImgService';
import CreateProdutoImgService from '../services/CreateProdutoImgService';
import UpdateProdutoImgService from '../services/UpdateProdutoImgService';
import DeleteProdutoImgService from '../services/DeleteProdutoImgService';
import AppError from '@shared/errors/AppError';

export default class ProdutosImgsController {
  public async index(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { order } = request.query;

    const listImgs = new ListProdutoImgService();
    const images = await listImgs.execute({ order }, connect);

    return response.json(classToClass(images));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { id } = request.params;
    const showProductImg = new ShowProdutoImgService();
    const images = await showProductImg.execute({ id }, connect);

    return response.json(classToClass(images));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const file = JSON.parse(JSON.stringify(request.files));

    if (!file.length) {
      throw new AppError('Select images.');
    }

    const createProdutoImgs = new CreateProdutoImgService();

    const { id_produtos, id_produtos_skus, ordem } = request.body;

    const returnFiles = file.map((file: { filename: string; path: string }) => {
      return {
        id_produtos: id_produtos,
        id_produtos_skus: id_produtos_skus,
        image: file.filename,
        ordem: ordem,
      };
    });

    const newProdutoImage = await createProdutoImgs.execute(
      returnFiles,
      connect,
    );

    return response.json(classToClass(newProdutoImage));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    // string de conexão
    const connect = request.connect;

    const { ordem } = request.body;
    const { id } = request.params;
    const updateImages = new UpdateProdutoImgService();
    const images = await updateImages.execute(
      {
        id,
        ordem,
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
