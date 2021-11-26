"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _CategoriaRepository = _interopRequireDefault(require("../typeorm/repositories/CategoriaRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowCategoriaService {
  async execute({
    id
  }, connect) {
    const categoriaRepository = (0, _typeorm.getCustomRepository)(_CategoriaRepository.default, connect);
    const rws = await categoriaRepository.createQueryBuilder('categorias').leftJoinAndSelect('categorias.children', 'categorias_b', 'categorias_b.excluir = 0').andWhere('categorias.id = :id', {
      id: id
    }).getMany();

    if (!rws) {
      throw new _AppError.default('Categoria not found.');
    }

    return rws;
  }

}

var _default = ShowCategoriaService;
exports.default = _default;