"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _MenuRepository = _interopRequireDefault(require("../typeorm/repositories/MenuRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateCategoriaService {
  async execute({
    id,
    id_categorias,
    id_produtos
  }, connect) {
    const categoriasRepository = (0, _typeorm.getCustomRepository)(_MenuRepository.default, connect);
    const categorias = await categoriasRepository.findOne(id);

    if (!categorias) {
      throw new _AppError.default('Marcas not found.');
    }

    categorias.id_categorias = id_categorias;
    categorias.id_produtos = id_produtos;
    await categoriasRepository.save(categorias);
    return categorias;
  }

}

var _default = UpdateCategoriaService;
exports.default = _default;