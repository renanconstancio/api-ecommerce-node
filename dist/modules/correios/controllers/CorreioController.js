"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ShowCorreioBuscaCep = _interopRequireDefault(require("../services/ShowCorreioBuscaCep"));

var _ShowCorreioBuscaCliente = _interopRequireDefault(require("../services/ShowCorreioBuscaCliente"));

var _ShowCorreioSolicitaEtiqueta = _interopRequireDefault(require("../services/ShowCorreioSolicitaEtiqueta"));

var _utils = require("../services/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Seguindo modelo
 * github.com/sthima/sigep
 */
class CorreioController {
  /**
   * Busca o cep
   * @param request Resquisicao do servico
   * @param response Resposta a ser respondida
   * @returns
   */
  async cep(request, response) {
    const connect = request.connect;
    const {
      cep
    } = request.params;
    const showCorreioBuscaCep = new _ShowCorreioBuscaCep.default();
    const cepShow = await showCorreioBuscaCep.execute({
      cep
    }, connect);
    return response.json(cepShow);
  }
  /**
   * Solicitar etiquetas
   * @param request Resquisicao do servico
   * @param response Resposta a ser respondida
   * @returns
   */


  async etiqueta(request, response) {
    const connect = request.connect;
    const {
      idServico,
      identificador,
      qtdEtiquetas,
      tipoDestinatario,
      usuario,
      senha
    } = request.body;
    const showSolicitaEtiqueta = new _ShowCorreioSolicitaEtiqueta.default();
    const cepShow = await showSolicitaEtiqueta.execute({
      idServico: idServico,
      identificador: identificador,
      qtdEtiquetas: qtdEtiquetas,
      tipoDestinatario: tipoDestinatario,
      usuario: usuario,
      senha: senha
    }, connect);
    /**
     * Na montagem do PLP no campo <numero_etiqueta> é necessário colocar o numero
     * das etiquetas com o Dígito
     */

    const responseEtiquetasComDigito = (0, _utils.etiquetasComDigito)(cepShow);
    return response.json(responseEtiquetasComDigito);
  }
  /**
   * Solicitar etiquetas
   * @param request Resquisicao do servico
   * @param response Resposta a ser respondida
   * @returns
   */


  async buscaCliente(request, response) {
    const connect = request.connect;
    const {
      idContrato,
      idCartaoPostagem,
      usuario,
      senha
    } = request.body;
    const showCorreioBuscaCliente = new _ShowCorreioBuscaCliente.default();
    const clienteShow = await showCorreioBuscaCliente.execute({
      idContrato: idContrato,
      idCartaoPostagem,
      usuario,
      senha
    }, connect);
    return response.json(clienteShow);
  } // public async show(request: Request, response: Response): Promise<Response> {
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

exports.default = CorreioController;