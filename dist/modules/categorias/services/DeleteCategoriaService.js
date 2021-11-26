"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _CategoriaRepository = _interopRequireDefault(require("../typeorm/repositories/CategoriaRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteCategoriaService {
  async execute({
    id
  }, connect) {
    const categoriaRepository = (0, _typeorm.getCustomRepository)(_CategoriaRepository.default, connect);
    const rws = await categoriaRepository.findOne(id);

    if (!rws) {
      throw new _AppError.default('Marca not found.');
    }

    rws.excluir = true;
    await categoriaRepository.save(rws);
  }

}

var _default = DeleteCategoriaService;
exports.default = _default;