"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ProdutoImg = _interopRequireDefault(require("../entities/ProdutoImg"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProdutoImgRepository = (_dec = (0, _typeorm.EntityRepository)(_ProdutoImg.default), _dec(_class = class ProdutoImgRepository extends _typeorm.Repository {}) || _class);
var _default = ProdutoImgRepository;
exports.default = _default;