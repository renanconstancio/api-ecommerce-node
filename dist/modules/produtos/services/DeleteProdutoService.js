"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _ProdutoRepository = _interopRequireDefault(require("../typeorm/repositories/ProdutoRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteProdutoService {
  async execute({
    id
  }, connect) {
    const produtosRepository = (0, _typeorm.getCustomRepository)(_ProdutoRepository.default, connect);
    const produto = await produtosRepository.findOne(id);

    if (!produto) {
      throw new _AppError.default('Not found.');
    }

    produto.excluir = true;
    await produtosRepository.save(produto); // await marcasRepository.remove(marca);
  }

}

var _default = DeleteProdutoService;
exports.default = _default;