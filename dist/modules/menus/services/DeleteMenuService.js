"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _MenuRepository = _interopRequireDefault(require("../typeorm/repositories/MenuRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteMenuService {
  async execute({
    id
  }, connect) {
    const categoriaRepository = (0, _typeorm.getCustomRepository)(_MenuRepository.default, connect);
    const rws = await categoriaRepository.findOne(id);

    if (!rws) {
      throw new _AppError.default('Menus not found.');
    }

    await categoriaRepository.remove(rws);
  }

}

var _default = DeleteMenuService;
exports.default = _default;