"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _ClientesEnderecosController = _interopRequireDefault(require("../controllers/ClientesEnderecosController"));

var _isAuthenticated = _interopRequireDefault(require("../../../shared/http/middlewares/isAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const clientesEnderecosRouter = (0, _express.Router)();
const clientesEnderecosController = new _ClientesEnderecosController.default();
clientesEnderecosRouter.use(_isAuthenticated.default);
clientesEnderecosRouter.get('/', clientesEnderecosController.index);
clientesEnderecosRouter.get('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), clientesEnderecosController.show);
clientesEnderecosRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_clientes: _celebrate.Joi.number().required(),
    nome_endereco: _celebrate.Joi.string().required(),
    nome_recebedor: _celebrate.Joi.string().required(),
    endereco: _celebrate.Joi.string().required(),
    nr: _celebrate.Joi.string().required(),
    bairro: _celebrate.Joi.string().required(),
    complemento: _celebrate.Joi.string().allow(''),
    referencia: _celebrate.Joi.string().allow(''),
    cidade: _celebrate.Joi.string().required(),
    uf: _celebrate.Joi.string().required(),
    cep: _celebrate.Joi.string().required(),
    ativo: _celebrate.Joi.string().allow(1),
    excluir: _celebrate.Joi.string().default(false)
  }
}), clientesEnderecosController.create);
clientesEnderecosRouter.put('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_clientes: _celebrate.Joi.number().required(),
    nome_endereco: _celebrate.Joi.string().required(),
    nome_recebedor: _celebrate.Joi.string().required(),
    endereco: _celebrate.Joi.string().required(),
    nr: _celebrate.Joi.string().required(),
    bairro: _celebrate.Joi.string().required(),
    complemento: _celebrate.Joi.string().allow(''),
    referencia: _celebrate.Joi.string().allow(''),
    cidade: _celebrate.Joi.string().required(),
    uf: _celebrate.Joi.string().required(),
    cep: _celebrate.Joi.string().required(),
    ativo: _celebrate.Joi.string().allow(1),
    excluir: _celebrate.Joi.string().default(false)
  },
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), clientesEnderecosController.update);
clientesEnderecosRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), clientesEnderecosController.delete);
var _default = clientesEnderecosRouter;
exports.default = _default;