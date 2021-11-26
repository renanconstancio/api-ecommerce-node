"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ProdutoRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListProdutoService {
  async execute({
    nome,
    order_nome
  }, connect) {
    const produtosRepository = (0, _typeorm.getCustomRepository)(_ProdutoRepository.default, connect); // const products = await redisCache.recover<IPaginateProduto>(
    //   'api-PRODUCT_LIST',
    // );
    // if (products) {
    //   return products as IPaginateProduto;
    // }

    const tmp = produtosRepository.createQueryBuilder('Prod').innerJoinAndSelect('Prod.brand', 'BrandP').innerJoinAndSelect('Prod.skus', 'SkuP').leftJoinAndSelect('SkuP.skuimgs', 'SkuPImg', 'SkuPImg.id_produtos_skus IS NOT NULL').leftJoinAndSelect('Prod.prodimgs', 'ProdImg', 'ProdImg.id_produtos_skus IS NULL').where('Prod.excluir = :excluir', {
      excluir: 0
    });
    if (nome) tmp.andWhere('Prod.nome like :nome', {
      nome: nome
    });
    if (order_nome === 'asc') tmp.addOrderBy('Prod.nome', 'ASC');
    if (order_nome === 'desc') tmp.addOrderBy('Prod.nome', 'DESC');
    const produtos = await tmp.paginate(); // await redisCache.save('api-PRODUCT_LIST', produtos);

    return produtos;
  }

}

var _default = ListProdutoService;
exports.default = _default;