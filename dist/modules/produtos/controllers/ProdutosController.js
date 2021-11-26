"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListProdutoService = _interopRequireDefault(require("../services/ListProdutoService"));

var _ShowProdutoService = _interopRequireDefault(require("../services/ShowProdutoService"));

var _CreateProdutoService = _interopRequireDefault(require("../services/CreateProdutoService"));

var _DeleteProdutoService = _interopRequireDefault(require("../services/DeleteProdutoService"));

var _UpdateProdutoService = _interopRequireDefault(require("../services/UpdateProdutoService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProdutosController {
  async index(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      nome,
      order_nome
    } = request.query;
    const listProdutos = new _ListProdutoService.default();
    const produtos = await listProdutos.execute({
      nome,
      order_nome
    }, connect);
    return response.json((0, _classTransformer.classToClass)(produtos));
  }

  async show(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id
    } = request.params;
    const showProduct = new _ShowProdutoService.default();
    const produto = await showProduct.execute({
      id
    }, connect);
    return response.json((0, _classTransformer.classToClass)(produto));
  }

  async create(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id_marcas,
      nome,
      subnome,
      descricao,
      postagem,
      ncm,
      csosn,
      cfop,
      cest,
      cst,
      unid,
      ativo,
      visivel,
      excluir
    } = request.body;
    const createProduto = new _CreateProdutoService.default();
    const marcaResp = await createProduto.execute({
      id_marcas,
      nome,
      subnome,
      descricao,
      postagem,
      ncm,
      csosn,
      cfop,
      cest,
      cst,
      unid,
      ativo,
      visivel,
      excluir
    }, connect);
    return response.json((0, _classTransformer.classToClass)(marcaResp));
  }

  async update(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id_marcas,
      nome,
      subnome,
      descricao,
      postagem,
      ncm,
      csosn,
      cfop,
      cest,
      cst,
      unid,
      ativo,
      visivel,
      excluir
    } = request.body;
    const {
      id
    } = request.params;
    const updateProduto = new _UpdateProdutoService.default();
    const produtos = await updateProduto.execute({
      id,
      id_marcas,
      nome,
      subnome,
      descricao,
      postagem,
      ncm,
      csosn,
      cfop,
      cest,
      cst,
      unid,
      ativo,
      visivel,
      excluir
    }, connect);
    return response.json((0, _classTransformer.classToClass)(produtos));
  }

  async delete(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id
    } = request.params;
    const deleteProduto = new _DeleteProdutoService.default();
    await deleteProduto.execute({
      id
    }, connect);
    return response.json([]);
  }

}

exports.default = ProdutosController;