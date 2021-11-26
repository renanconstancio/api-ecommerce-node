"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ProdutoImgRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoImgRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Classe implementa uma insersão de dados como array, podendo conter n dados de insersão
 */
class CreateProdutoImgService {
  async execute(dataImgService, connect) {
    const imgsRepository = (0, _typeorm.getCustomRepository)(_ProdutoImgRepository.default, connect);
    const sku = imgsRepository.create(dataImgService);
    await imgsRepository.save(sku);
    return sku;
  }

}

var _default = CreateProdutoImgService;
exports.default = _default;