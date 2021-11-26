"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ProdutoRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import redisCache from '@shared/cache/RedisCache';
class CreateProdutoService {
  async execute({
    id_marcas,
    nome,
    subnome,
    descricao,
    postagem,
    ncm,
    csosn,
    cfop,
    cest,
    cst,
    unid,
    ativo = true,
    visivel = true,
    excluir = false
  }, connect) {
    const produtosRepository = (0, _typeorm.getCustomRepository)(_ProdutoRepository.default, connect);
    const nomeExists = await produtosRepository.findByName(nome);

    if (nomeExists) {
      throw new _AppError.default('There is already one name');
    }

    const produto = produtosRepository.create({
      id_marcas,
      nome,
      subnome,
      descricao,
      postagem,
      ncm,
      csosn,
      cfop,
      cest,
      cst,
      unid,
      visivel,
      ativo,
      excluir
    });
    await produtosRepository.save(produto);
    return produto;
  }

}

var _default = CreateProdutoService;
exports.default = _default;