"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _isAuthenticated = _interopRequireDefault(require("../../../shared/http/middlewares/isAuthenticated"));

var _MenusController = _interopRequireDefault(require("../controllers/MenusController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const menusRouter = (0, _express.Router)();
const menusController = new _MenusController.default();
menusRouter.use(_isAuthenticated.default);
menusRouter.get('/', menusController.index);
menusRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_categorias: _celebrate.Joi.number().required(),
    id_produtos: _celebrate.Joi.number().required()
  }
}), menusController.create);
menusRouter.put('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_categorias: _celebrate.Joi.number().required(),
    id_produtos: _celebrate.Joi.number().required()
  },
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), menusController.update);
menusRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), menusController.delete);
var _default = menusRouter;
exports.default = _default;