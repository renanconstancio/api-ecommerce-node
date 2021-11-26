"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../../../config/upload"));

var _ProdutosImgsController = _interopRequireDefault(require("../controllers/ProdutosImgsController"));

var _isAuthenticated = _interopRequireDefault(require("../../../shared/http/middlewares/isAuthenticated"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const produtosImgsRouter = (0, _express.Router)();
const produtosImgsController = new _ProdutosImgsController.default();
const upload = (0, _multer.default)(_upload.default.multer);
produtosImgsRouter.use(_isAuthenticated.default);
produtosImgsRouter.get('/', produtosImgsController.index);
produtosImgsRouter.get('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), produtosImgsController.show);
produtosImgsRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    id_produtos: _celebrate.Joi.number().allow(0),
    id_produtos_skus: _celebrate.Joi.number().allow(0),
    ordem: _celebrate.Joi.number().allow(0),
    excluir: _celebrate.Joi.boolean().default(false)
  }
}), upload.array('file', 10), produtosImgsController.create);
produtosImgsRouter.put('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    ordem: _celebrate.Joi.number().allow(0)
  },
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), produtosImgsController.update);
produtosImgsRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.number().required()
  }
}), produtosImgsController.delete);
var _default = produtosImgsRouter;
exports.default = _default;