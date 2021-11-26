"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Marca = _interopRequireDefault(require("../entities/Marca"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MarcaRepository = (_dec = (0, _typeorm.EntityRepository)(_Marca.default), _dec(_class = class MarcaRepository extends _typeorm.Repository {
  async findByCod(cod) {
    const marcaResp = this.findOne({
      where: {
        cod
      }
    });
    return marcaResp;
  }

  async findByName(marca) {
    const marcaResp = this.findOne({
      where: {
        marca
      }
    });
    return marcaResp;
  }

  async findAllByIds(marcas) {
    const marcaIds = marcas.map(marca => marca.id);
    const existentMarcas = await this.find({
      where: {
        id: (0, _typeorm.In)(marcaIds)
      }
    });
    return existentMarcas;
  }

}) || _class);
var _default = MarcaRepository;
exports.default = _default;