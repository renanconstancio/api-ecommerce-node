import { Request, Response } from 'express';
import CreateMarcaService from '../services/CreateMarcaService';
import DeleteMarcaService from '../services/DeleteMarcaService';
import ListMarcaService from '../services/ListMarcaService';
import ShowMarcaService from '../services/ShowMarcaService';
import UpdateMarcaService from '../services/UpdateMarcaService';
import { classToClass } from 'class-transformer';

export default class MarcasController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { marca, cod, order } = request.query;

    const listMarcas = new ListMarcaService();
    const marcas = await listMarcas.execute({ marca, cod, order });

    return response.json(classToClass(marcas));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showProduct = new ShowMarcaService();
    const marca = await showProduct.execute({ id });

    return response.json(classToClass(marca));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { cod, marca, postagem, visivel } = request.body;
    const createMarca = new CreateMarcaService();
    const marcaResp = await createMarca.execute({
      cod,
      marca,
      postagem,
      visivel,
      // excluir,
    });
    return response.json(classToClass(marcaResp));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { cod, marca, postagem, visivel } = request.body;
    const { id } = request.params;
    const updateMarca = new UpdateMarcaService();
    const marcaRes = await updateMarca.execute({
      id,
      cod,
      marca,
      postagem,
      visivel,
      // excluir,
    });
    return response.json(classToClass(marcaRes));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteMarca = new DeleteMarcaService();

    await deleteMarca.execute({ id });

    return response.json([]);
  }
}
