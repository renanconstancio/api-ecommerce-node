"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Produto = _interopRequireDefault(require("../entities/Produto"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProdutoRepository = (_dec = (0, _typeorm.EntityRepository)(_Produto.default), _dec(_class = class ProdutoRepository extends _typeorm.Repository {
  async findByName(nome) {
    const produto = this.findOne({
      where: {
        nome
      }
    });
    return produto;
  }

  async findAllByIds(produtos) {
    const produtoIds = produtos.map(p => p.id);
    const existentProdutos = await this.find({
      where: {
        id: (0, _typeorm.In)(produtoIds)
      }
    });
    return existentProdutos;
  }

}) || _class);
var _default = ProdutoRepository;
exports.default = _default;