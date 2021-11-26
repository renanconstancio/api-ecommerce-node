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

class CreateClienteEnderecoService {
  async execute({
    id_clientes,
    nome_endereco,
    nome_recebedor,
    endereco,
    nr,
    bairro,
    complemento,
    referencia,
    cidade,
    uf,
    cep,
    ativo = true,
    excluir = false
  }, connect) {
    const clienteEnderecoRepository = (0, _typeorm.getCustomRepository)(_ClienteEnderecoRepository.default, connect);

    if (!id_clientes) {
      throw new _AppError.default(`Unselected customer`);
    }

    const cliente = clienteEnderecoRepository.create({
      id_clientes,
      nome_endereco,
      nome_recebedor,
      endereco,
      nr,
      bairro,
      complemento,
      referencia,
      cidade,
      uf,
      cep,
      ativo,
      excluir
    });
    await clienteEnderecoRepository.save(cliente);
    return (0, _classTransformer.classToClass)(cliente);
  }

}

var _default = CreateClienteEnderecoService;
exports.default = _default;