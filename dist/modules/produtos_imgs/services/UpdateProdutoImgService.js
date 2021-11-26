"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ProdutoImgRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoImgRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateProdutoImgService {
  async execute({
    id,
    ordem
  }, connect) {
    const imageRepository = (0, _typeorm.getCustomRepository)(_ProdutoImgRepository.default, connect);
    const images = await imageRepository.findOne(id);

    if (!images) {
      throw new _AppError.default('Sku not found.');
    }

    imageRepository.merge(images, {
      ordem: ordem
    });
    await imageRepository.save(images);
    return images;
  }

}

var _default = UpdateProdutoImgService;
exports.default = _default;