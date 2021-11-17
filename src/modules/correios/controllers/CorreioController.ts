import { Request, Response } from 'express';
import buscaCEP from '../sigep/buscaCep';
import AppError from '@shared/errors/AppError';
import ShowCorreioBuscaCep from '../services/ShowCorreioBuscaCep';

export default class CorreioController {
  public async index(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const { cep } = request.params;

    const showCorreioBuscaCep = new ShowCorreioBuscaCep();
    const cepShow = await showCorreioBuscaCep.execute({ cep }, connect);

    return response.json(cepShow);
  }

  // public async show(request: Request, response: Response): Promise<Response> {
  //   const connect = request.connect;
  //   const { id } = request.params;
  //   const showProduct = new ShowMarcaService();
  //   const marca = await showProduct.execute({ id }, connect);

  //   return response.json(classToClass(marca));
  // }

  // public async create(request: Request, response: Response): Promise<Response> {
  //   const connect = request.connect;
  //   const { cod, marca, postagem, visivel } = request.body;
  //   const createMarca = new CreateMarcaService();
  //   const marcaResp = await createMarca.execute(
  //     {
  //       cod,
  //       marca,
  //       postagem,
  //       visivel,
  //     },
  //     connect,
  //   );
  //   return response.json(classToClass(marcaResp));
  // }

  // public async update(request: Request, response: Response): Promise<Response> {
  //   const connect = request.connect;
  //   const { cod, marca, postagem, visivel } = request.body;
  //   const { id } = request.params;
  //   const updateMarca = new UpdateMarcaService();
  //   const marcaRes = await updateMarca.execute(
  //     {
  //       id,
  //       cod,
  //       marca,
  //       postagem,
  //       visivel,
  //     },
  //     connect,
  //   );
  //   return response.json(classToClass(marcaRes));
  // }

  // public async delete(request: Request, response: Response): Promise<Response> {
  //   const connect = request.connect;
  //   const { id } = request.params;
  //   const deleteMarca = new DeleteMarcaService();

  //   await deleteMarca.execute({ id }, connect);

  //   return response.json([]);
  // }
}
