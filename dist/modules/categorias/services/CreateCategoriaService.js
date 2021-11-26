"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _CategoriaRepository = _interopRequireDefault(require("../typeorm/repositories/CategoriaRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateCategoriaService {
  async execute({
    id_categorias,
    categoria,
    description,
    keywords,
    icon,
    ordem,
    visivel = true,
    excluir = false
  }, connect) {
    const categoriaRepository = (0, _typeorm.getCustomRepository)(_CategoriaRepository.default, connect);
    const categoriaExists = await categoriaRepository.findByCategoria(categoria);

    if (categoriaExists) {
      throw new _AppError.default('There is already one categoria with this categoria');
    }

    const rwsCategoria = categoriaRepository.create({
      id_categorias,
      categoria,
      description,
      keywords,
      icon,
      ordem,
      visivel,
      excluir
    });
    await categoriaRepository.save(rwsCategoria);
    return rwsCategoria;
  }

}

var _default = CreateCategoriaService;
exports.default = _default;