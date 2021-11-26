"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _celebrate = require("celebrate");

var _express = require("express");

var _CorreioController = _interopRequireDefault(require("../controllers/CorreioController"));

var _etiqueta = require("../services/prints/etiqueta");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const correiosRouter = (0, _express.Router)();
const correiosController = new _CorreioController.default(); // correiosRouter.use(isAuthenticated);

correiosRouter.get('/cep/:cep', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    // cep: Joi.number().required(),
    cep: _celebrate.Joi.string().required()
  }
}), correiosController.cep);
correiosRouter.post('/etiquetas', // celebrate({
//   [Segments.PARAMS]: {
//     // cep: Joi.number().required(),
//     cep: Joi.string().required(),
//   },
// }),
correiosController.etiqueta);
correiosRouter.post('/cliente', // celebrate({
//   [Segments.PARAMS]: {
//     // cep: Joi.number().required(),
//     cep: Joi.string().required(),
//   },
// }),
correiosController.buscaCliente);
correiosRouter.get('/etiqueta-pdf', _etiqueta.printEtiquetas);
var _default = correiosRouter;
exports.default = _default;