"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ProdutoImgRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoImgRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteProdutoImgService {
  async execute({
    id
  }, connect) {
    const imgsRepository = (0, _typeorm.getCustomRepository)(_ProdutoImgRepository.default, connect);
    const image = await imgsRepository.findOne(id);

    if (!image) {
      throw new _AppError.default('Not found.');
    }

    image.excluir = true;
    await imgsRepository.save(image);
  }

}

var _default = DeleteProdutoImgService;
exports.default = _default;