"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListCategoriaService = _interopRequireDefault(require("../services/ListCategoriaService"));

var _ShowCategoriaService = _interopRequireDefault(require("../services/ShowCategoriaService"));

var _UpdateCategoriaService = _interopRequireDefault(require("../services/UpdateCategoriaService"));

var _DeleteCategoriaService = _interopRequireDefault(require("../services/DeleteCategoriaService"));

var _CreateCategoriaService = _interopRequireDefault(require("../services/CreateCategoriaService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CategoriasController {
  async index(request, response) {
    const connect = request.connect;
    const {
      categoria,
      order
    } = request.query;
    const listCategorias = new _ListCategoriaService.default();
    const categorias = await listCategorias.execute({
      categoria,
      order
    }, connect);
    return response.json((0, _classTransformer.classToClass)(categorias));
  }

  async show(request, response) {
    const connect = request.connect;
    const {
      id
    } = request.params;
    const showCategoria = new _ShowCategoriaService.default();
    const marca = await showCategoria.execute({
      id
    }, connect);
    return response.json((0, _classTransformer.classToClass)(marca));
  }

  async create(request, response) {
    const connect = request.connect;
    const {
      id_categorias,
      categoria,
      description,
      keywords,
      icon,
      ordem,
      visivel,
      excluir
    } = request.body;
    const createCategoria = new _CreateCategoriaService.default();
    const categoriaResponse = await createCategoria.execute({
      id_categorias,
      categoria,
      description,
      keywords,
      icon,
      ordem,
      visivel,
      excluir
    }, connect);
    return response.json((0, _classTransformer.classToClass)(categoriaResponse));
  }

  async update(request, response) {
    const connect = request.connect;
    const {
      id_categorias,
      categoria,
      description,
      keywords,
      icon,
      ordem,
      visivel,
      excluir
    } = request.body;
    const {
      id
    } = request.params;
    const updateMarca = new _UpdateCategoriaService.default();
    const marcaRes = await updateMarca.execute({
      id,
      id_categorias,
      categoria,
      description,
      keywords,
      icon,
      ordem,
      visivel,
      excluir
    }, connect);
    return response.json((0, _classTransformer.classToClass)(marcaRes));
  }

  async delete(request, response) {
    const connect = request.connect;
    const {
      id
    } = request.params;
    const deleteMarca = new _DeleteCategoriaService.default();
    await deleteMarca.execute({
      id
    }, connect);
    return response.json([]);
  }

}

exports.default = CategoriasController;