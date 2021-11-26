"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListProdutoSkuService = _interopRequireDefault(require("../services/ListProdutoSkuService"));

var _ShowProdutoSkuService = _interopRequireDefault(require("../services/ShowProdutoSkuService"));

var _CreateProdutoSkuService = _interopRequireDefault(require("../services/CreateProdutoSkuService"));

var _UpdateProdutoSkuService = _interopRequireDefault(require("../services/UpdateProdutoSkuService"));

var _DeleteProdutoSkuService = _interopRequireDefault(require("../services/DeleteProdutoSkuService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProdutosSkusController {
  async index(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      sku,
      order_sku
    } = request.query;
    const listSkus = new _ListProdutoSkuService.default();
    const produtoSkus = await listSkus.execute({
      sku,
      order_sku
    }, connect);
    return response.json((0, _classTransformer.classToClass)(produtoSkus));
  }

  async show(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id
    } = request.params;
    const showProductSku = new _ShowProdutoSkuService.default();
    const produtoSku = await showProductSku.execute({
      id
    }, connect);
    return response.json((0, _classTransformer.classToClass)(produtoSku));
  }

  async create(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id_produtos,
      skus,
      codigo,
      codigo_barras,
      referencia,
      estoque,
      preco_custo,
      preco_venda,
      preco_promo,
      altura,
      largura,
      comprimento,
      peso,
      excluir
    } = request.body;
    const createProduto = new _CreateProdutoSkuService.default();
    const produtoskus = await createProduto.execute({
      id_produtos,
      skus,
      codigo,
      codigo_barras,
      referencia,
      estoque,
      preco_custo,
      preco_venda,
      preco_promo,
      altura,
      largura,
      comprimento,
      peso,
      excluir
    }, connect);
    return response.json((0, _classTransformer.classToClass)(produtoskus));
  }

  async update(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id_produtos,
      skus,
      codigo,
      codigo_barras,
      referencia,
      estoque,
      preco_custo,
      preco_venda,
      preco_promo,
      altura,
      largura,
      comprimento,
      peso,
      excluir
    } = request.body;
    const {
      id
    } = request.params;
    const updateProdutoSku = new _UpdateProdutoSkuService.default();
    const produtoSkus = await updateProdutoSku.execute({
      id,
      id_produtos,
      skus,
      codigo,
      codigo_barras,
      referencia,
      estoque,
      preco_custo,
      preco_venda,
      preco_promo,
      altura,
      largura,
      comprimento,
      peso,
      excluir
    }, connect);
    return response.json((0, _classTransformer.classToClass)(produtoSkus));
  }

  async delete(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id
    } = request.params;
    const deleteProdutoSku = new _DeleteProdutoSkuService.default();
    await deleteProdutoSku.execute({
      id
    }, connect);
    return response.json([]);
  }

}

exports.default = ProdutosSkusController;