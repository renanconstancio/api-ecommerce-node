"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Categoria = _interopRequireDefault(require("../entities/Categoria"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CategoriaRepository = (_dec = (0, _typeorm.EntityRepository)(_Categoria.default), _dec(_class = class CategoriaRepository extends _typeorm.Repository {
  async findByCategoria(categoria) {
    const rws = this.findOne({
      where: {
        categoria: categoria.trim()
      }
    });
    return rws;
  }

  async findByDescription(description) {
    const rws = this.findOne({
      where: {
        description
      }
    });
    return rws;
  }

  async findAllByIds(categorias) {
    const rwsIds = categorias.map(categoria => categoria.id);
    const existCategorias = await this.find({
      where: {
        id: (0, _typeorm.In)(rwsIds)
      }
    });
    return existCategorias;
  }

}) || _class);
var _default = CategoriaRepository;
exports.default = _default;