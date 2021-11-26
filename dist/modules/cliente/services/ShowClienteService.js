"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ClienteRepository = _interopRequireDefault(require("../typeorm/repositories/ClienteRepository"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowClienteService {
  async execute({
    id
  }, connect) {
    const clientesRepository = (0, _typeorm.getCustomRepository)(_ClienteRepository.default, connect);
    const cliente = await clientesRepository.findOne(id);

    if (!cliente) {
      throw new _AppError.default('Cliente not found.');
    }

    return (0, _classTransformer.classToClass)(cliente);
  }

}

var _default = ShowClienteService;
exports.default = _default;