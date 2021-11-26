"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _users = _interopRequireDefault(require("../../../modules/users/routes/users.routes"));

var _tokens_stores = _interopRequireDefault(require("../../../modules/tokens_stores/routes/tokens_stores.routes"));

var _categorias = _interopRequireDefault(require("../../../modules/categorias/routes/categorias.routes"));

var _marcas = _interopRequireDefault(require("../../../modules/marca/routes/marcas.routes"));

var _clientes = _interopRequireDefault(require("../../../modules/cliente/routes/clientes.routes"));

var _clientes_enderecos = _interopRequireDefault(require("../../../modules/cliente_endereco/routes/clientes_enderecos.routes"));

var _produtos = _interopRequireDefault(require("../../../modules/produtos/routes/produtos.routes"));

var _produtos_skus = _interopRequireDefault(require("../../../modules/produtos_skus/routes/produtos_skus.routes"));

var _produtos_imgs = _interopRequireDefault(require("../../../modules/produtos_imgs/routes/produtos_imgs.routes"));

var _menus = _interopRequireDefault(require("../../../modules/menus/routes/menus.routes"));

var _correios = _interopRequireDefault(require("../../../modules/correios/routes/correios.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)(); // authenticate all stores

routes.use('/v1/authstore', _tokens_stores.default); // authenticate user

routes.use('/v1/auth', _users.default);
routes.use('/v1/menus', _menus.default);
routes.use('/v1/marcas', _marcas.default);
routes.use('/v1/categorias', _categorias.default);
routes.use('/v1/clientes', _clientes.default);
routes.use('/v1/clientes_enderecos', _clientes_enderecos.default);
routes.use('/v1/produtos', _produtos.default);
routes.use('/v1/produtos_skus', _produtos_skus.default);
routes.use('/v1/produtos_imgs', _produtos_imgs.default);
routes.use('/v1/correio', _correios.default);
var _default = routes;
exports.default = _default;