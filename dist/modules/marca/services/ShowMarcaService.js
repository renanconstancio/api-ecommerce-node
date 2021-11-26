"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _MarcaRepository = _interopRequireDefault(require("../typeorm/repositories/MarcaRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowMarcaService {
  async execute({
    id
  }, connect) {
    const marcasRepository = (0, _typeorm.getCustomRepository)(_MarcaRepository.default, connect);
    const marca = await marcasRepository.findOne(id);

    if (!marca) {
      throw new _AppError.default('Marcas not found.');
    }

    return marca;
  }

}

var _default = ShowMarcaService;
exports.default = _default;