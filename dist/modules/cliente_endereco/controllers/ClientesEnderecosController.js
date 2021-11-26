"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classTransformer = require("class-transformer");

var _ListClienteEnderecoService = _interopRequireDefault(require("../services/ListClienteEnderecoService"));

var _ShowClienteEnderecoService = _interopRequireDefault(require("../services/ShowClienteEnderecoService"));

var _CreateClienteEnderecoService = _interopRequireDefault(require("../services/CreateClienteEnderecoService"));

var _UpdateClienteEnderecoService = _interopRequireDefault(require("../services/UpdateClienteEnderecoService"));

var _DeleteClienteEnderecoService = _interopRequireDefault(require("../services/DeleteClienteEnderecoService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ClientesEnderecosController {
  async index(request, response) {
    // string de conexão
    const connect = request.connect;
    const listEnderecos = new _ListClienteEnderecoService.default();
    const enderecos = await listEnderecos.execute(connect);
    return response.json((0, _classTransformer.classToClass)(enderecos));
  }

  async show(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id
    } = request.params;
    const showEnderecos = new _ShowClienteEnderecoService.default();
    const enderecos = await showEnderecos.execute({
      id
    }, connect);
    return response.json((0, _classTransformer.classToClass)(enderecos));
  }

  async create(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id_clientes,
      nome_endereco,
      nome_recebedor,
      endereco,
      nr,
      bairro,
      complemento,
      referencia,
      cidade,
      uf,
      cep,
      ativo,
      excluir
    } = request.body;
    const createCliente = new _CreateClienteEnderecoService.default();
    const cliente = await createCliente.execute({
      id_clientes,
      nome_endereco,
      nome_recebedor,
      endereco,
      nr,
      bairro,
      complemento,
      referencia,
      cidade,
      uf,
      cep,
      ativo,
      excluir
    }, connect);
    return response.json(cliente);
  }

  async update(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id_clientes,
      nome_endereco,
      nome_recebedor,
      endereco,
      nr,
      bairro,
      complemento,
      referencia,
      cidade,
      uf,
      cep,
      ativo,
      excluir
    } = request.body;
    const {
      id
    } = request.params;
    const updateProduct = new _UpdateClienteEnderecoService.default();
    const product = await updateProduct.execute({
      id,
      id_clientes,
      nome_endereco,
      nome_recebedor,
      endereco,
      nr,
      bairro,
      complemento,
      referencia,
      cidade,
      uf,
      cep,
      ativo,
      excluir
    }, connect);
    return response.json(product);
  }

  async delete(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id
    } = request.params;
    const deleteMarca = new _DeleteClienteEnderecoService.default();
    await deleteMarca.execute({
      id
    }, connect);
    return response.json([]);
  }

}

exports.default = ClientesEnderecosController;