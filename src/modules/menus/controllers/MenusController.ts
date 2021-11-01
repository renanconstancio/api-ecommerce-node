import { Request, Response } from 'express';

import ListMenuService from '../services/ListMenuService';
import ShowMenuService from '../services/ShowMenuService';
import UpdateMenuService from '../services/UpdateMenuService';
import DeleteMenuService from '../services/DeleteMenuService';
import CreateMenuService from '../services/CreateMenuService';
import { classToClass } from 'class-transformer';

export default class MenusController {
  public async index(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;

    const listMenus = new ListMenuService();
    const categorias = await listMenus.execute(connect);

    return response.json(classToClass(categorias));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const { id } = request.params;
    const showMenu = new ShowMenuService();
    const marca = await showMenu.execute({ id }, connect);

    return response.json(classToClass(marca));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const { id_categorias, id_produtos } = request.body;
    const createMenu = new CreateMenuService();
    const categoriaResponse = await createMenu.execute(
      {
        id_categorias,
        id_produtos,
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
    const updateMarca = new UpdateMenuService();
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
    const deleteMarca = new DeleteMenuService();

    await deleteMarca.execute({ id }, connect);

    return response.json([]);
  }
}
