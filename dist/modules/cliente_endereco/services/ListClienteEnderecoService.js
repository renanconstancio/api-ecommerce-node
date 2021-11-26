"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ClienteEnderecoRepository = _interopRequireDefault(require("../typeorm/repositories/ClienteEnderecoRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListClienteEnderecoService {
  async execute(connect) {
    const clientesEndercosRepository = (0, _typeorm.getCustomRepository)(_ClienteEnderecoRepository.default, connect); // const redisCache = new RedisCache();
    // const marcas = await redisCache.recover<IPaginateCliente>('api-MARCA_LIST');
    // if (!marcas) {
    //   // marcas = await marcasRepository.find();
    //   const marcas = await marcasRepository.createQueryBuilder().paginate();
    //   await redisCache.save('api-MARCA_LIST', marcas);
    // }

    const enderecos = await clientesEndercosRepository.createQueryBuilder().paginate();
    return enderecos;
  }

}

var _default = ListClienteEnderecoService;
exports.default = _default;