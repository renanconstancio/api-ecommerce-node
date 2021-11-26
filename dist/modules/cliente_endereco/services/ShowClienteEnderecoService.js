"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _classTransformer = require("class-transformer");

var _ClienteEnderecoRepository = _interopRequireDefault(require("../typeorm/repositories/ClienteEnderecoRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowClienteEnderecoService {
  async execute({
    id
  }, connect) {
    const enderecosRepository = (0, _typeorm.getCustomRepository)(_ClienteEnderecoRepository.default, connect);
    const endereco = await enderecosRepository.findOne(id);

    if (!endereco) {
      throw new _AppError.default('address not found.');
    }

    return (0, _classTransformer.classToClass)(endereco);
  }

}

var _default = ShowClienteEnderecoService;
exports.default = _default;