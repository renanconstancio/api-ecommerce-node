"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ClienteRepository = _interopRequireDefault(require("../typeorm/repositories/ClienteRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListClienteService {
  async execute(connect) {
    const clientesRepository = (0, _typeorm.getCustomRepository)(_ClienteRepository.default, connect); // const redisCache = new RedisCache();
    // const marcas = await redisCache.recover<IPaginateCliente>('api-MARCA_LIST');
    // if (!marcas) {
    //   // marcas = await marcasRepository.find();
    //   const marcas = await marcasRepository.createQueryBuilder().paginate();
    //   await redisCache.save('api-MARCA_LIST', marcas);
    // }

    const clientes = await clientesRepository.createQueryBuilder('Cliente') // .innerJoinAndSelect('Cliente.address', 'AddressC')
    .paginate();
    return clientes;
  }

}

var _default = ListClienteService;
exports.default = _default;