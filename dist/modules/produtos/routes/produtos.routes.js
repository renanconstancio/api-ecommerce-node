"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _ProdutosController = _interopRequireDefault(require("../controllers/ProdutosController"));

var _isAuthenticated = _interopRequireDefault(require("../../../shared/http/middlewares/isAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const produtosRouter = (0, _express.Router)();
const produtosController = new _ProdutosController.default();
produtosRouter.use(_isAuthenticated.default);
produtosRouter.get('/', produtosController.index);
produtosRouter.get('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), produtosController.show);
produtosRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_marcas: _celebrate.Joi.number().required(),
    nome: _celebrate.Joi.string().required(),
    subnome: _celebrate.Joi.string().allow(''),
    descricao: _celebrate.Joi.string().allow(''),
    postagem: _celebrate.Joi.string().allow(''),
    ncm: _celebrate.Joi.string().required(),
    csosn: _celebrate.Joi.string().required(),
    cfop: _celebrate.Joi.string().required(),
    cest: _celebrate.Joi.string().required(),
    cst: _celebrate.Joi.string().required(),
    unid: _celebrate.Joi.string().required(),
    ativo: _celebrate.Joi.boolean().default(true),
    visivel: _celebrate.Joi.boolean().default(true),
    excluir: _celebrate.Joi.boolean().default(false)
  }
}), produtosController.create);
produtosRouter.put('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_marcas: _celebrate.Joi.number().required(),
    nome: _celebrate.Joi.string().required(),
    subnome: _celebrate.Joi.string().allow(''),
    descricao: _celebrate.Joi.string().allow(''),
    postagem: _celebrate.Joi.string().allow(''),
    ncm: _celebrate.Joi.string().required(),
    csosn: _celebrate.Joi.string().required(),
    cfop: _celebrate.Joi.string().required(),
    cest: _celebrate.Joi.string().required(),
    cst: _celebrate.Joi.string().required(),
    unid: _celebrate.Joi.string().required(),
    ativo: _celebrate.Joi.boolean().default(true),
    visivel: _celebrate.Joi.boolean().default(true),
    excluir: _celebrate.Joi.boolean().default(false)
  },
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), produtosController.update);
produtosRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), produtosController.delete);
var _default = produtosRouter;
exports.default = _default;