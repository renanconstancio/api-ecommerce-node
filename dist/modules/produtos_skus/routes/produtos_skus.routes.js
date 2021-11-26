"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _ProdutosSkusController = _interopRequireDefault(require("../controllers/ProdutosSkusController"));

var _isAuthenticated = _interopRequireDefault(require("../../../shared/http/middlewares/isAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const produtosSkusRouter = (0, _express.Router)();
const produtosSkusController = new _ProdutosSkusController.default();
produtosSkusRouter.use(_isAuthenticated.default);
produtosSkusRouter.get('/', produtosSkusController.index);
produtosSkusRouter.get('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), produtosSkusController.show);
produtosSkusRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_produtos: _celebrate.Joi.number().required(),
    skus: _celebrate.Joi.string().required(),
    codigo: _celebrate.Joi.string().allow(''),
    codigo_barras: _celebrate.Joi.string().allow(''),
    referencia: _celebrate.Joi.string().allow(''),
    estoque: _celebrate.Joi.number().required(),
    preco_custo: _celebrate.Joi.number().required(),
    preco_venda: _celebrate.Joi.number().required(),
    preco_promo: _celebrate.Joi.number().required(),
    altura: _celebrate.Joi.number().default('5'),
    largura: _celebrate.Joi.number().default('11'),
    comprimento: _celebrate.Joi.number().default('16'),
    peso: _celebrate.Joi.number().default('0.300'),
    excluir: _celebrate.Joi.boolean().default(false)
  }
}), produtosSkusController.create);
produtosSkusRouter.put('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_produtos: _celebrate.Joi.number().required(),
    skus: _celebrate.Joi.string().required(),
    codigo: _celebrate.Joi.string().allow(''),
    codigo_barras: _celebrate.Joi.string().allow(''),
    referencia: _celebrate.Joi.string().allow(''),
    estoque: _celebrate.Joi.number().required(),
    preco_custo: _celebrate.Joi.number().required(),
    preco_venda: _celebrate.Joi.number().required(),
    preco_promo: _celebrate.Joi.number().required(),
    altura: _celebrate.Joi.number().default('5'),
    largura: _celebrate.Joi.number().default('11'),
    comprimento: _celebrate.Joi.number().default('16'),
    peso: _celebrate.Joi.number().default('0.300'),
    excluir: _celebrate.Joi.boolean().default(false)
  },
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), produtosSkusController.update);
produtosSkusRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), produtosSkusController.delete);
var _default = produtosSkusRouter;
exports.default = _default;