"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _isAuthenticated = _interopRequireDefault(require("../../../shared/http/middlewares/isAuthenticated"));

var _CategoriasController = _interopRequireDefault(require("../controllers/CategoriasController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const categoriasRouter = (0, _express.Router)();
const categoriasController = new _CategoriasController.default();
categoriasRouter.use(_isAuthenticated.default);
categoriasRouter.get('/', categoriasController.index);
categoriasRouter.get('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), categoriasController.show);
categoriasRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_categorias: _celebrate.Joi.number().allow(false),
    categoria: _celebrate.Joi.string().required(),
    description: _celebrate.Joi.string().allow(false),
    keywords: _celebrate.Joi.string().allow(false),
    icon: _celebrate.Joi.string().allow(false),
    ordem: _celebrate.Joi.number().allow(0),
    visivel: _celebrate.Joi.boolean().allow(true)
  }
}), categoriasController.create);
categoriasRouter.put('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_categorias: _celebrate.Joi.number().allow(false),
    categoria: _celebrate.Joi.string().required(),
    description: _celebrate.Joi.string().allow(false),
    keywords: _celebrate.Joi.string().allow(false),
    icon: _celebrate.Joi.string().allow(false),
    ordem: _celebrate.Joi.number().allow(0),
    visivel: _celebrate.Joi.boolean().allow(true)
  },
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), categoriasController.update);
categoriasRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), categoriasController.delete);
var _default = categoriasRouter;
exports.default = _default;