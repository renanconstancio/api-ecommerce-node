"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ProdutoRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UpdateProdutoService {
  async execute({
    id,
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
    const produto = await produtosRepository.findOne(id);

    if (!produto) {
      throw new _AppError.default('Produtos not found.');
    }

    produtosRepository.merge(produto, {
      id_marcas: id_marcas,
      nome: nome,
      subnome: subnome,
      descricao: descricao,
      postagem: postagem,
      ncm: ncm,
      csosn: csosn,
      cfop: cfop,
      cest: cest,
      cst: cst,
      unid: unid,
      ativo: ativo,
      visivel: visivel,
      excluir: excluir
    });
    await produtosRepository.save(produto);
    return produto;
  }

}

var _default = UpdateProdutoService;
exports.default = _default;