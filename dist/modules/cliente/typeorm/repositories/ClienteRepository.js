"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Cliente = _interopRequireDefault(require("../entities/Cliente"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ClienteRepository = (_dec = (0, _typeorm.EntityRepository)(_Cliente.default), _dec(_class = class ClienteRepository extends _typeorm.Repository {
  async findByEmail(email) {
    const cliente = this.findOne({
      where: {
        email
      }
    });
    return cliente;
  }

  async findByNome(nome) {
    const cliente = this.findOne({
      where: {
        nome
      }
    });
    return cliente;
  }

  async findAllByIds(clientes) {
    const clienteIds = clientes.map(cliente => cliente.id);
    const existentClientes = await this.find({
      where: {
        id: (0, _typeorm.In)(clienteIds)
      }
    });
    return existentClientes;
  }

}) || _class);
var _default = ClienteRepository;
exports.default = _default;