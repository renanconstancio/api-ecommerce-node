"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ProdutoSkuRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoSkuRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateProdutoSkuService {
  async execute({
    id,
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
    const sku = await skusRepository.findOne(id);

    if (!sku) {
      throw new _AppError.default('Sku not found.');
    }

    skusRepository.merge(sku, {
      id_produtos: id_produtos,
      skus: skus,
      codigo: codigo,
      codigo_barras: codigo_barras,
      referencia: referencia,
      estoque: estoque,
      preco_custo: preco_custo,
      preco_venda: preco_venda,
      preco_promo: preco_promo,
      altura: altura,
      largura: largura,
      comprimento: comprimento,
      peso: peso,
      excluir: excluir
    });
    await skusRepository.save(sku);
    return sku;
  }

}

var _default = UpdateProdutoSkuService;
exports.default = _default;