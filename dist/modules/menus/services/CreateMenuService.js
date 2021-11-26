"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _typeorm = require("typeorm");

var _MenuRepository = _interopRequireDefault(require("../typeorm/repositories/MenuRepository"));

var _CategoriaRepository = _interopRequireDefault(require("../../categorias/typeorm/repositories/CategoriaRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateMenuService {
  async execute({
    id_categorias,
    id_produtos
  }, connect) {
    let id_menus = null;
    const menuRepository = (0, _typeorm.getCustomRepository)(_MenuRepository.default, connect); // Verificar se o menu existe

    const menusExists = await menuRepository.findByMenu(id_categorias, id_produtos);

    if (menusExists) {
      throw new _AppError.default('There is already one categoria with this categoria');
    } // Verificar se a categoria de menu principal existe


    const categoriaRepository = (0, _typeorm.getCustomRepository)(_CategoriaRepository.default, connect); // Verificar se o menu parent existe

    const categoriaPrincipal = await categoriaRepository.findOne(id_categorias);

    if (categoriaPrincipal) {
      const idCategoriaParent = categoriaPrincipal.id_categorias; // Verificar se o menu existe

      const categoriaExists = await menuRepository.findByMenu(idCategoriaParent, id_produtos); // Verificar se o menu não existe

      if (!categoriaExists) {
        const addMenuPrincipal = menuRepository.create({
          id_categorias: idCategoriaParent,
          id_produtos
        });
        await menuRepository.save(addMenuPrincipal);
        id_menus = addMenuPrincipal.id;
      } // Verificar se o menu existe


      if (categoriaExists) {
        id_menus = categoriaExists.id;
      }
    }

    const rwsMenu = menuRepository.create({
      id_menus,
      id_categorias,
      id_produtos
    });
    await menuRepository.save(rwsMenu);
    return rwsMenu;
  }

}

var _default = CreateMenuService;
exports.default = _default;