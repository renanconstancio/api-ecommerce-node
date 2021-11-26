"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _MarcaRepository = _interopRequireDefault(require("../typeorm/repositories/MarcaRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListMarcaService {
  async execute({
    marca,
    cod,
    order = 'ASC'
  }, connect) {
    const marcasRepository = (0, _typeorm.getCustomRepository)(_MarcaRepository.default, connect);
    const tmp = marcasRepository.createQueryBuilder().where('excluir = :excluir', {
      excluir: 0
    });
    if (marca) tmp.andWhere('marca like :marca', {
      marca: marca
    });
    if (cod) tmp.andWhere('cod like :cod', {
      cod: cod
    });
    if (order === 'ASC') tmp.orderBy({
      marca: order
    });
    if (order === 'DESC') tmp.orderBy({
      marca: order
    });
    const marcas = await tmp.cache(true).paginate();
    return marcas;
  }

}

var _default = ListMarcaService;
exports.default = _default;