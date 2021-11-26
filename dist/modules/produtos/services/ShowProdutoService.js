"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ProdutoRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowProdutoService {
  async execute({
    id
  }, connect) {
    const produtosRepository = (0, _typeorm.getCustomRepository)(_ProdutoRepository.default, connect);
    const produto = await produtosRepository.createQueryBuilder('Prod').innerJoinAndSelect('Prod.brand', 'BrandP').innerJoinAndSelect('Prod.skus', 'SkuP').leftJoinAndSelect('SkuP.skuimgs', 'SkuPImg', 'SkuPImg.id_produtos_skus IS NOT NULL').leftJoinAndSelect('Prod.prodimgs', 'ProdImg', 'ProdImg.id_produtos_skus IS NULL').where('Prod.id = :id', {
      id: id
    }).getOne();

    if (!produto) {
      throw new _AppError.default('Product not found.');
    }

    return produto;
  }

}

var _default = ShowProdutoService;
exports.default = _default;