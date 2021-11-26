"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ProdutoImgRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoImgRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListProdutoImgService {
  async execute({
    order
  }, connect) {
    const imagesRepository = (0, _typeorm.getCustomRepository)(_ProdutoImgRepository.default, connect);
    const tmp = imagesRepository.createQueryBuilder().where('excluir = :excluir', {
      excluir: 0
    });
    if (order === 'asc') tmp.orderBy({
      id: 'ASC'
    });
    if (order === 'desc') tmp.orderBy({
      id: 'DESC'
    });
    const images = await tmp.paginate();
    return images;
  }

}

var _default = ListProdutoImgService;
exports.default = _default;