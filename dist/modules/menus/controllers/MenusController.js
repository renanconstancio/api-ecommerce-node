"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ListMenuService = _interopRequireDefault(require("../services/ListMenuService"));

var _UpdateMenuService = _interopRequireDefault(require("../services/UpdateMenuService"));

var _DeleteMenuService = _interopRequireDefault(require("../services/DeleteMenuService"));

var _CreateMenuService = _interopRequireDefault(require("../services/CreateMenuService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MenusController {
  async index(request, response) {
    const connect = request.connect;
    const listMenus = new _ListMenuService.default();
    const menus = await listMenus.execute(connect);
    return response.json((0, _classTransformer.classToClass)(menus));
  }

  async create(request, response) {
    const connect = request.connect;
    const {
      id_categorias,
      id_produtos
    } = request.body;
    const createMenu = new _CreateMenuService.default();
    const menuResponse = await createMenu.execute({
      id_categorias,
      id_produtos
    }, connect);
    return response.json((0, _classTransformer.classToClass)(menuResponse));
  }

  async update(request, response) {
    const connect = request.connect;
    const {
      id_categorias,
      id_produtos
    } = request.body;
    const {
      id
    } = request.params;
    const updateMarca = new _UpdateMenuService.default();
    const marcaRes = await updateMarca.execute({
      id,
      id_categorias,
      id_produtos
    }, connect);
    return response.json((0, _classTransformer.classToClass)(marcaRes));
  }

  async delete(request, response) {
    const connect = request.connect;
    const {
      id
    } = request.params;
    const deleteMarca = new _DeleteMenuService.default();
    await deleteMarca.execute({
      id
    }, connect);
    return response.json([]);
  }

}

exports.default = MenusController;