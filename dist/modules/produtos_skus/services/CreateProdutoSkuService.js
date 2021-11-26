"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ProdutoSkuRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoSkuRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateProdutoSkuService {
  async execute({
    id_produtos,
    skus,
    codigo,
    codigo_barras,
    referencia,
    estoque,
    preco_custo,
    preco_venda,
    preco_promo,
    altura,
    largura,
    comprimento,
    peso,
    excluir = false
  }, connect) {
    const skusRepository = (0, _typeorm.getCustomRepository)(_ProdutoSkuRepository.default, connect);
    const skusExists = await skusRepository.findBySku(skus);

    if (skusExists) {
      throw new _AppError.default('There is already one sku name');
    }

    if (!id_produtos) {
      throw new _AppError.default('Select one product');
    }

    const sku = skusRepository.create({
      id_produtos,
      skus,
      codigo,
      codigo_barras,
      referencia,
      estoque,
      preco_custo,
      preco_venda,
      preco_promo,
      altura,
      largura,
      comprimento,
      peso,
      excluir
    });
    await skusRepository.save(sku);
    return sku;
  }

}

var _default = CreateProdutoSkuService;
exports.default = _default;