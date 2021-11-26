"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ProdutoSkuRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoSkuRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListProdutoSkuService {
  async execute({
    sku,
    order_sku
  }, connect) {
    const skusRepository = (0, _typeorm.getCustomRepository)(_ProdutoSkuRepository.default, connect);
    const tmp = skusRepository.createQueryBuilder().where('excluir = :excluir', {
      excluir: 0
    });
    if (sku) tmp.andWhere('sku like :sku', {
      sku: sku
    });
    if (order_sku === 'asc') tmp.orderBy({
      sku: 'ASC'
    });
    if (order_sku === 'desc') tmp.orderBy({
      sku: 'DESC'
    });
    const skus = await tmp.cache(true).paginate();
    return skus;
  }

}

var _default = ListProdutoSkuService;
exports.default = _default;