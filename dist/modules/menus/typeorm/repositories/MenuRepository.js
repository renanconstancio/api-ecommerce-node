"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Menu = _interopRequireDefault(require("../entities/Menu"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MenuRepository = (_dec = (0, _typeorm.EntityRepository)(_Menu.default), _dec(_class = class MenuRepository extends _typeorm.Repository {
  async findByMenu(id_categorias, id_produtos) {
    const rws = this.findOne({
      where: {
        id_categorias,
        id_produtos
      }
    });
    return rws;
  }

  async findAllByIds(menus) {
    const rwsIds = menus.map(menu => menu.id);
    const existMenus = await this.find({
      where: {
        id: (0, _typeorm.In)(rwsIds)
      }
    });
    return existMenus;
  }

}) || _class);
var _default = MenuRepository;
exports.default = _default;