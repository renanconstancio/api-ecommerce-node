"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _MarcasController = _interopRequireDefault(require("../controllers/MarcasController"));

var _isAuthenticated = _interopRequireDefault(require("../../../shared/http/middlewares/isAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const marcasRouter = (0, _express.Router)();
const marcasController = new _MarcasController.default();
marcasRouter.use(_isAuthenticated.default);
marcasRouter.get('/', marcasController.index);
marcasRouter.get('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), marcasController.show);
marcasRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    cod: _celebrate.Joi.string().required(),
    marca: _celebrate.Joi.string().required(),
    postagem: _celebrate.Joi.string(),
    visivel: _celebrate.Joi.boolean() // excluir: Joi.boolean(),

  }
}), marcasController.create);
marcasRouter.put('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    cod: _celebrate.Joi.string().required(),
    marca: _celebrate.Joi.string().required(),
    postagem: _celebrate.Joi.string(),
    visivel: _celebrate.Joi.boolean() // excluir: Joi.boolean(),

  },
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), marcasController.update);
marcasRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), marcasController.delete);
var _default = marcasRouter;
exports.default = _default;