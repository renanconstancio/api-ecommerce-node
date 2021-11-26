"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _MenuRepository = _interopRequireDefault(require("../typeorm/repositories/MenuRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListMenuService {
  async execute(connect) {
    const menusRepository = (0, _typeorm.getCustomRepository)(_MenuRepository.default, connect);
    const tmp = menusRepository.createQueryBuilder('Menus').innerJoinAndSelect('Menus.categoria', 'MenusA').innerJoinAndSelect('Menus.children', 'MenusB').innerJoinAndSelect('MenusB.categoria', 'MenusC'); // console.log('SQL: %s', tmp.getSql());

    const categorias = await tmp.cache(true).getMany();
    return categorias;
  }

}

var _default = ListMenuService;
exports.default = _default;