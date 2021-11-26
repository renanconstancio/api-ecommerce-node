"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ClienteEndereco = _interopRequireDefault(require("../entities/ClienteEndereco"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// interface IFindClientesEnderecos {
//   id: number;
// }
let ClienteEndercoRepository = (_dec = (0, _typeorm.EntityRepository)(_ClienteEndereco.default), _dec(_class = class ClienteEndercoRepository extends _typeorm.Repository {// public async findByEmail(email: string): Promise<ClienteEndereco | undefined> {
  //   const cliente = this.findOne({
  //     where: {
  //       email,
  //     },
  //   });
  //   return cliente;
  // }
  // public async findByNome(nome: string): Promise<Cliente | undefined> {
  //   const cliente = this.findOne({
  //     where: {
  //       nome,
  //     },
  //   });
  //   return cliente;
  // }
  // public async findAllByIds(clientes: IFindClientes[]): Promise<Cliente[]> {
  //   const clienteIds = clientes.map(cliente => cliente.id);
  //   const existentClientes = await this.find({
  //     where: {
  //       id: In(clienteIds),
  //     },
  //   });
  //   return existentClientes;
  // }
}) || _class);
var _default = ClienteEndercoRepository;
exports.default = _default;