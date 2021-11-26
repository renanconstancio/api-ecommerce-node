"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ClienteEnderecoRepository = _interopRequireDefault(require("../typeorm/repositories/ClienteEnderecoRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateClienteEnderecoService {
  async execute({
    id,
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
    const enderecosRepository = (0, _typeorm.getCustomRepository)(_ClienteEnderecoRepository.default, connect);
    const cliEnderecos = await enderecosRepository.findOne(id);

    if (!cliEnderecos) {
      throw new _AppError.default('address not found.');
    }

    cliEnderecos.id_clientes = id_clientes;
    cliEnderecos.nome_endereco = nome_endereco;
    cliEnderecos.nome_recebedor = nome_recebedor;
    cliEnderecos.endereco = endereco;
    cliEnderecos.nr = nr;
    cliEnderecos.bairro = bairro;
    cliEnderecos.complemento = complemento;
    cliEnderecos.referencia = referencia;
    cliEnderecos.cidade = cidade;
    cliEnderecos.uf = uf;
    cliEnderecos.cep = cep;
    cliEnderecos.ativo = ativo;
    cliEnderecos.excluir = excluir;
    await enderecosRepository.save(cliEnderecos);
    return cliEnderecos;
  }

}

var _default = UpdateClienteEnderecoService;
exports.default = _default;