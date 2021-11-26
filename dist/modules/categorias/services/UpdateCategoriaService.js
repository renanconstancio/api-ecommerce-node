"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _CategoriaRepository = _interopRequireDefault(require("../typeorm/repositories/CategoriaRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateCategoriaService {
  async execute({
    id,
    id_categorias,
    categoria,
    description,
    keywords,
    icon,
    ordem,
    visivel = true,
    excluir = false
  }, connect) {
    const categoriasRepository = (0, _typeorm.getCustomRepository)(_CategoriaRepository.default, connect);
    const categorias = await categoriasRepository.findOne(id);

    if (!categorias) {
      throw new _AppError.default('Marcas not found.');
    }

    categorias.id_categorias = id_categorias;
    categorias.categoria = categoria;
    categorias.description = description;
    categorias.ordem = ordem;
    categorias.keywords = keywords;
    categorias.icon = icon;
    categorias.visivel = visivel;
    categorias.excluir = excluir;
    await categoriasRepository.save(categorias);
    return categorias;
  }

}

var _default = UpdateCategoriaService;
exports.default = _default;