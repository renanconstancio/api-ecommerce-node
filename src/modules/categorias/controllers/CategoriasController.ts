import { Request, Response } from 'express';

import ListCategoriaService from '../services/ListCategoriaService';
import ShowCategoriaService from '../services/ShowCategoriaService';
import UpdateCategoriaService from '../services/UpdateCategoriaService';
import DeleteCategoriaService from '../services/DeleteCategoriaService';
import CreateCategoriaService from '../services/CreateCategoriaService';
import { classToClass } from 'class-transformer';

export default class CategoriasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const { categoria, order } = request.query;

    const listCategorias = new ListCategoriaService();
    const categorias = await listCategorias.execute(
      { categoria, order },
      connect,
    );

    return response.json(classToClass(categorias));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const { id } = request.params;
    const showCategoria = new ShowCategoriaService();
    const marca = await showCategoria.execute({ id }, connect);

    return response.json(classToClass(marca));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const {
      id_categorias,
      categoria,
      description,
      keywords,
      icon,
      ordem,
      visivel,
      excluir,
    } = request.body;
    const createCategoria = new CreateCategoriaService();
    const categoriaResponse = await createCategoria.execute(
      {
        id_categorias,
        categoria,
        description,
        keywords,
        icon,
        ordem,
        visivel,
        excluir,
      },
      connect,
    );
    return response.json(classToClass(categoriaResponse));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const {
      id_categorias,
      categoria,
      description,
      keywords,
      icon,
      ordem,
      visivel,
      excluir,
    } = request.body;
    const { id } = request.params;
    const updateMarca = new UpdateCategoriaService();
    const marcaRes = await updateMarca.execute(
      {
        id,
        id_categorias,
        categoria,
        description,
        keywords,
        icon,
        ordem,
        visivel,
        excluir,
      },
      connect,
    );
    return response.json(classToClass(marcaRes));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const { id } = request.params;
    const deleteMarca = new DeleteCategoriaService();

    await deleteMarca.execute({ id }, connect);

    return response.json([]);
  }
}
