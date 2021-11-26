"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _CategoriaRepository = _interopRequireDefault(require("../typeorm/repositories/CategoriaRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListCategoriaService {
  async execute({
    categoria,
    order = 'ASC'
  }, connect) {
    const categoriasRepository = (0, _typeorm.getCustomRepository)(_CategoriaRepository.default, connect);
    const tmp = categoriasRepository.createQueryBuilder('categorias').leftJoinAndSelect('categorias.children', 'categorias_b', 'categorias_b.excluir = 0').andWhere('categorias.excluir = :excluir and categorias.id_categorias IS NULL', {
      excluir: 0
    });

    if (categoria) {
      tmp.andWhere('categorias.categoria like :categoria', {
        categoria: categoria
      });
    }

    if (order === 'DESC') {
      tmp.addOrderBy('categorias.ordem', 'DESC');
      tmp.addOrderBy('categorias_b.ordem', 'ASC');
    }

    if (order === 'ASC') {
      tmp.addOrderBy('categorias.ordem', 'ASC');
      tmp.addOrderBy('categorias_b.ordem', 'ASC');
    }

    const categorias = await tmp.paginate();
    return categorias;
  }

}

var _default = ListCategoriaService;
exports.default = _default;