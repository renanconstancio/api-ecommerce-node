"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classTransformer = require("class-transformer");

var _ListProdutoImgService = _interopRequireDefault(require("../services/ListProdutoImgService"));

var _ShowProdutoImgService = _interopRequireDefault(require("../services/ShowProdutoImgService"));

var _CreateProdutoImgService = _interopRequireDefault(require("../services/CreateProdutoImgService"));

var _UpdateProdutoImgService = _interopRequireDefault(require("../services/UpdateProdutoImgService"));

var _DeleteProdutoImgService = _interopRequireDefault(require("../services/DeleteProdutoImgService"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProdutosImgsController {
  async index(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      order
    } = request.query;
    const listImgs = new _ListProdutoImgService.default();
    const images = await listImgs.execute({
      order
    }, connect);
    return response.json((0, _classTransformer.classToClass)(images));
  }

  async show(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id
    } = request.params;
    const showProductImg = new _ShowProdutoImgService.default();
    const images = await showProductImg.execute({
      id
    }, connect);
    return response.json((0, _classTransformer.classToClass)(images));
  }

  async create(request, response) {
    // string de conexão
    const connect = request.connect;
    const file = JSON.parse(JSON.stringify(request.files));

    if (!file.length) {
      throw new _AppError.default('Select images.');
    }

    const createProdutoImgs = new _CreateProdutoImgService.default();
    const {
      id_produtos,
      id_produtos_skus,
      ordem
    } = request.body;
    const returnFiles = file.map(file => {
      return {
        id_produtos: id_produtos,
        id_produtos_skus: id_produtos_skus,
        image: file.filename,
        ordem: ordem
      };
    });
    const newProdutoImage = await createProdutoImgs.execute(returnFiles, connect);
    return response.json((0, _classTransformer.classToClass)(newProdutoImage));
  }

  async update(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      ordem
    } = request.body;
    const {
      id
    } = request.params;
    const updateImages = new _UpdateProdutoImgService.default();
    const images = await updateImages.execute({
      id,
      ordem
    }, connect);
    return response.json((0, _classTransformer.classToClass)(images));
  }

  async delete(request, response) {
    // string de conexão
    const connect = request.connect;
    const {
      id
    } = request.params;
    const deleteImages = new _DeleteProdutoImgService.default();
    await deleteImages.execute({
      id
    }, connect);
    return response.json([]);
  }

}

exports.default = ProdutosImgsController;