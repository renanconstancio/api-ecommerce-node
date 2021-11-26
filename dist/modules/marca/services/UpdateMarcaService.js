"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _MarcaRepository = _interopRequireDefault(require("../typeorm/repositories/MarcaRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateMarcaService {
  async execute({
    id,
    cod,
    marca,
    postagem = '',
    visivel = true,
    excluir = false
  }, connect) {
    const marcasRepository = (0, _typeorm.getCustomRepository)(_MarcaRepository.default, connect);
    const marcaRes = await marcasRepository.findOne(id);

    if (!marcaRes) {
      throw new _AppError.default('Marcas not found.');
    }

    marcaRes.cod = cod;
    marcaRes.marca = marca;
    marcaRes.postagem = postagem;
    marcaRes.visivel = visivel;
    marcaRes.excluir = excluir;
    await marcasRepository.save(marcaRes);
    return marcaRes;
  }

}

var _default = UpdateMarcaService;
exports.default = _default;