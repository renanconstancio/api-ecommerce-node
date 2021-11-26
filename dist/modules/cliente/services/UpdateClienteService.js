"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ClienteRepository = _interopRequireDefault(require("../typeorm/repositories/ClienteRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateClienteService {
  async execute({
    id,
    nome,
    email,
    senha,
    cnpj,
    ie,
    cpf,
    rg,
    telefone,
    celular,
    operadora,
    nascim,
    admin = false,
    excluir = false
  }, connect) {
    const clientesRepository = (0, _typeorm.getCustomRepository)(_ClienteRepository.default, connect);
    const cliente = await clientesRepository.findOne(id);

    if (!cliente) {
      throw new _AppError.default('Clientes not found.');
    }

    cliente.nome = nome;
    cliente.email = email;
    cliente.senha = senha;
    cliente.cnpj = cnpj;
    cliente.ie = ie;
    cliente.cpf = cpf;
    cliente.rg = rg;
    cliente.telefone = telefone;
    cliente.celular = celular;
    cliente.operadora = operadora;
    cliente.nascim = nascim;
    cliente.admin = admin;
    cliente.excluir = excluir;
    await clientesRepository.save(cliente);
    return cliente;
  }

}

var _default = UpdateClienteService;
exports.default = _default;