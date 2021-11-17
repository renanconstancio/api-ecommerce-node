import { Request, Response } from 'express';

import ShowCorreioBuscaCep from '../services/ShowCorreioBuscaCep';
import ShowCorreioBuscaCliente from '../services/ShowCorreioBuscaCliente';
import ShowCorreioSolicitaEtiqueta from '../services/ShowCorreioSolicitaEtiqueta';
import { ISIGEPCliente, ISIGEPSolicitaEtiqueta } from '../services/sigep/types';

export default class CorreioController {
  /**
   * Busca o cep
   * @param request Resquisicao do servico
   * @param response Resposta a ser respondida
   * @returns
   */
  public async cep(request: Request, response: Response): Promise<Response> {
    const connect = request.connect;
    const { cep } = request.params;

    const showCorreioBuscaCep = new ShowCorreioBuscaCep();
    const cepShow = await showCorreioBuscaCep.execute({ cep }, connect);

    return response.json(cepShow);
  }

  /**
   * Solicitar etiquetas
   * @param request Resquisicao do servico
   * @param response Resposta a ser respondida
   * @returns
   */
  public async etiqueta(
    request: Request<ISIGEPSolicitaEtiqueta>,
    response: Response,
  ): Promise<Response> {
    const connect = request.connect;
    const {
      idServico,
      identificador,
      qtdEtiquetas,
      tipoDestinatario,
      usuario,
      senha,
    } = request.body;

    const showSolicitaEtiqueta = new ShowCorreioSolicitaEtiqueta();
    const cepShow = await showSolicitaEtiqueta.execute(
      {
        idServico: idServico,
        identificador: identificador,
        qtdEtiquetas: qtdEtiquetas,
        tipoDestinatario: tipoDestinatario,
        usuario: usuario,
        senha: senha,
      },
      connect,
    );

    return response.json(cepShow);
  }

  /**
   * Solicitar etiquetas
   * @param request Resquisicao do servico
   * @param response Resposta a ser respondida
   * @returns
   */
  public async buscaCliente(
    request: Request<ISIGEPCliente>,
    response: Response,
  ): Promise<Response> {
    const connect = request.connect;
    const { idContrato, idCartaoPostagem, usuario, senha } = request.body;

    const showCorreioBuscaCliente = new ShowCorreioBuscaCliente();
    const clienteShow = await showCorreioBuscaCliente.execute(
      { idContrato: idContrato, idCartaoPostagem, usuario, senha },
      connect,
    );

    return response.json(clienteShow);
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
