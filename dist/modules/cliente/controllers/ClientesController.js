"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreateClienteService = _interopRequireDefault(require("../services/CreateClienteService"));

var _DeleteClienteService = _interopRequireDefault(require("../services/DeleteClienteService"));

var _ListClienteService = _interopRequireDefault(require("../services/ListClienteService"));

var _ShowClienteService = _interopRequireDefault(require("../services/ShowClienteService"));

var _UpdateClienteService = _interopRequireDefault(require("../services/UpdateClienteService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ClientesController {
  async index(request, response) {
    // string de conexão
    const connect = request.connect;
    const listClientes = new _ListClienteService.default();
    const clientes = await listClientes.execute(connect);
    return response.json((0, _classTransformer.classToClass)(clientes));
  }

  async show(request, response) {
    const connect = request.connect;
    const {
      id
    } = request.params;
    const showCliente = new _ShowClienteService.default();
    const cliente = await showCliente.execute({
      id
    }, connect);
    return response.json((0, _classTransformer.classToClass)(cliente));
  }

  async create(request, response) {
    const connect = request.connect;
    const {
      nome,
      email,
      senha,
      cnpj,
      ie,
      cpf,
      rg,
      telefone,
      celular,
      operadora,
      nascim,
      admin,
      excluir
    } = request.body;
    const createCliente = new _CreateClienteService.default();
    const cliente = await createCliente.execute({
      nome: nome.trim(),
      email: email.trim(),
      senha,
      cnpj,
      ie,
      cpf,
      rg,
      telefone,
      celular,
      operadora,
      nascim,
      admin,
      excluir
    }, connect);
    return response.json(cliente);
  }

  async update(request, response) {
    const connect = request.connect;
    const {
      nome,
      email,
      senha,
      cnpj,
      ie,
      cpf,
      rg,
      telefone,
      celular,
      operadora,
      nascim,
      admin,
      excluir
    } = request.body;
    const {
      id
    } = request.params;
    const updateProduct = new _UpdateClienteService.default();
    const product = await updateProduct.execute({
      id,
      nome,
      email,
      senha,
      cnpj,
      ie,
      cpf,
      rg,
      telefone,
      celular,
      operadora,
      nascim,
      admin,
      excluir
    }, connect);
    return response.json(product);
  }

  async delete(request, response) {
    const connect = request.connect;
    const {
      id
    } = request.params;
    const deleteMarca = new _DeleteClienteService.default();
    await deleteMarca.execute({
      id
    }, connect);
    return response.json([]);
  }

}

exports.default = ClientesController;