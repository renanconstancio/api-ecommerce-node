"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ProdutoSku = _interopRequireDefault(require("../entities/ProdutoSku"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProdutoSkuRepository = (_dec = (0, _typeorm.EntityRepository)(_ProdutoSku.default), _dec(_class = class ProdutoSkuRepository extends _typeorm.Repository {
  async findBySku(skus) {
    const sku = this.findOne({
      where: {
        skus
      }
    });
    return sku;
  } // public async findBySku(skus: string): Promise<ProdutoSku | undefined> {
  //   const sku = this.findOne({
  //     where: {
  //       skus,
  //     },
  //   });
  //   return sku;
  // }


  async findAllByIds(prodsku) {
    const prodSkuIds = prodsku.map(psku => psku.id);
    const existentSkuProd = await this.find({
      where: {
        id: (0, _typeorm.In)(prodSkuIds)
      }
    });
    return existentSkuProd;
  }

}) || _class);
var _default = ProdutoSkuRepository;
exports.default = _default;