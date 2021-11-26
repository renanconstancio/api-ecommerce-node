"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreateMarcaService = _interopRequireDefault(require("../services/CreateMarcaService"));

var _DeleteMarcaService = _interopRequireDefault(require("../services/DeleteMarcaService"));

var _ListMarcaService = _interopRequireDefault(require("../services/ListMarcaService"));

var _ShowMarcaService = _interopRequireDefault(require("../services/ShowMarcaService"));

var _UpdateMarcaService = _interopRequireDefault(require("../services/UpdateMarcaService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MarcasController {
  async index(request, response) {
    const connect = request.connect;
    const {
      marca,
      cod,
      order
    } = request.query;
    const listMarcas = new _ListMarcaService.default();
    const marcas = await listMarcas.execute({
      marca,
      cod,
      order
    }, connect);
    return response.json((0, _classTransformer.classToClass)(marcas));
  }

  async show(request, response) {
    const connect = request.connect;
    const {
      id
    } = request.params;
    const showProduct = new _ShowMarcaService.default();
    const marca = await showProduct.execute({
      id
    }, connect);
    return response.json((0, _classTransformer.classToClass)(marca));
  }

  async create(request, response) {
    const connect = request.connect;
    const {
      cod,
      marca,
      postagem,
      visivel
    } = request.body;
    const createMarca = new _CreateMarcaService.default();
    const marcaResp = await createMarca.execute({
      cod,
      marca,
      postagem,
      visivel
    }, connect);
    return response.json((0, _classTransformer.classToClass)(marcaResp));
  }

  async update(request, response) {
    const connect = request.connect;
    const {
      cod,
      marca,
      postagem,
      visivel
    } = request.body;
    const {
      id
    } = request.params;
    const updateMarca = new _UpdateMarcaService.default();
    const marcaRes = await updateMarca.execute({
      id,
      cod,
      marca,
      postagem,
      visivel
    }, connect);
    return response.json((0, _classTransformer.classToClass)(marcaRes));
  }

  async delete(request, response) {
    const connect = request.connect;
    const {
      id
    } = request.params;
    const deleteMarca = new _DeleteMarcaService.default();
    await deleteMarca.execute({
      id
    }, connect);
    return response.json([]);
  }

}

exports.default = MarcasController;