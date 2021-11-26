"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ClientesController = _interopRequireDefault(require("../controllers/ClientesController"));

var _celebrate = require("celebrate");

var _isAuthenticated = _interopRequireDefault(require("../../../shared/http/middlewares/isAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const clientesRouter = (0, _express.Router)();
const clientesController = new _ClientesController.default();
clientesRouter.use(_isAuthenticated.default);
clientesRouter.get('/', clientesController.index);
clientesRouter.get('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), clientesController.show);
clientesRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    nome: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().required(),
    senha: _celebrate.Joi.string().required(),
    cnpj: _celebrate.Joi.string().allow(''),
    ie: _celebrate.Joi.string().allow(''),
    cpf: _celebrate.Joi.string().allow(''),
    rg: _celebrate.Joi.string().allow(''),
    telefone: _celebrate.Joi.string().required(),
    celular: _celebrate.Joi.string().allow(''),
    operadora: _celebrate.Joi.string().allow(''),
    nascim: _celebrate.Joi.string().allow(''),
    admin: _celebrate.Joi.boolean().allow(false),
    excluir: _celebrate.Joi.boolean().allow(false)
  }
}), clientesController.create);
clientesRouter.put('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    nome: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().required(),
    senha: _celebrate.Joi.string().required(),
    cnpj: _celebrate.Joi.string().allow(''),
    ie: _celebrate.Joi.string().allow(''),
    cpf: _celebrate.Joi.string().allow(''),
    rg: _celebrate.Joi.string().allow(''),
    telefone: _celebrate.Joi.string().required(),
    celular: _celebrate.Joi.string().allow(''),
    operadora: _celebrate.Joi.string().allow(''),
    nascim: _celebrate.Joi.string().allow(''),
    admin: _celebrate.Joi.boolean().allow(false),
    excluir: _celebrate.Joi.boolean().allow(false)
  },
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), clientesController.update);
clientesRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), clientesController.delete);
var _default = clientesRouter;
exports.default = _default;