"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ClienteRepository = _interopRequireDefault(require("../typeorm/repositories/ClienteRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteClienteService {
  async execute({
    id
  }, connect) {
    const clientesRepository = (0, _typeorm.getCustomRepository)(_ClienteRepository.default, connect);
    const cliente = await clientesRepository.findOne(id);

    if (!cliente) {
      throw new _AppError.default('Marca not found.');
    }

    cliente.excluir = true;
    await clientesRepository.save(cliente); // await marcasRepository.remove(marca);
  }

}

var _default = DeleteClienteService;
exports.default = _default;