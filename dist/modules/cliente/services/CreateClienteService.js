"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ClienteRepository = _interopRequireDefault(require("../typeorm/repositories/ClienteRepository"));

var _classTransformer = require("class-transformer");

var _bcryptjs = require("bcryptjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateClienteService {
  async execute({
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
    const emailExists = await clientesRepository.findByEmail(email);

    if (emailExists) {
      throw new _AppError.default(`Já existe um e-mail cadastrado com ${email}`);
    }

    const senhaHash = await (0, _bcryptjs.hash)(senha, 8);
    const cliente = clientesRepository.create({
      nome,
      email,
      senha: senhaHash,
      cnpj,
      ie,
      cpf,
      rg,
      telefone,
      celular,
      operadora,
      nascim,
      admin,
      excluir
    });
    await clientesRepository.save(cliente);
    return (0, _classTransformer.classToClass)(cliente);
  }

}

var _default = CreateClienteService;
exports.default = _default;