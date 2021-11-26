"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _MarcaRepository = _interopRequireDefault(require("../typeorm/repositories/MarcaRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import redisCache from '@shared/cache/RedisCache';
class CreateMarcaService {
  async execute({
    cod,
    marca,
    postagem,
    visivel = true,
    excluir = false
  }, connect) {
    const marcasRepository = (0, _typeorm.getCustomRepository)(_MarcaRepository.default, connect);
    const codExists = await marcasRepository.findByCod(cod);

    if (codExists) {
      throw new _AppError.default('There is already one Marca código with this cod');
    }

    const marcaResp = marcasRepository.create({
      cod,
      marca,
      postagem,
      visivel,
      excluir
    });
    await marcasRepository.save(marcaResp);
    return marcaResp;
  }

}

var _default = CreateMarcaService;
exports.default = _default;