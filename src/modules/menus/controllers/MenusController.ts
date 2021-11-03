import { Request, Response } from 'express';

import ListMenuService from '../services/ListMenuService';
import UpdateMenuService from '../services/UpdateMenuService';
import DeleteMenuService from '../services/DeleteMenuService';
import CreateMenuService from '../services/CreateMenuService';
import { classToClass } from 'class-transformer';

export default class MenusController {
  public async index(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;

    const listMenus = new ListMenuService();
    const menus = await listMenus.execute(connect);

    return response.json(classToClass(menus));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;

    const { id_categorias, id_produtos } = request.body;

    const createMenu = new CreateMenuService();

    const menuResponse = await createMenu.execute(
      {
        id_categorias,
        id_produtos,
      },
      connect,
    );
    return response.json(classToClass(menuResponse));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const { id_categorias, id_produtos } = request.body;
    const { id } = request.params;
    const updateMarca = new UpdateMenuService();
    const marcaRes = await updateMarca.execute(
      {
        id,
        id_categorias,
        id_produtos,
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
