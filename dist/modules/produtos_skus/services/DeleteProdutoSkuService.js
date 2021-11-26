"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ProdutoSkuRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoSkuRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteProdutoSkuService {
  async execute({
    id
  }, connect) {
    const skusRepository = (0, _typeorm.getCustomRepository)(_ProdutoSkuRepository.default, connect);
    const sku = await skusRepository.findOne(id);

    if (!sku) {
      throw new _AppError.default('Not found.');
    }

    sku.excluir = true;
    await skusRepository.save(sku); // await marcasRepository.remove(marca);
  }

}

var _default = DeleteProdutoSkuService;
exports.default = _default;