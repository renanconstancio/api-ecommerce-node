"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classTransformer = require("class-transformer");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _CreateTokenStoreService = _interopRequireDefault(require("../services/CreateTokenStoreService"));

var _ShowTokenStoreService = _interopRequireDefault(require("../services/ShowTokenStoreService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TokensStoresControllers {
  async index(request, response) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new _AppError.default('JWT Token is missing.');
    } // Bearer sdlkfjsldkfjlsjfffdklfjdflksjflkjfdlk3405905


    const [, token] = authHeader.split(' ');
    const showTokenStore = new _ShowTokenStoreService.default();
    const showToken = await showTokenStore.execute({
      token: token
    });
    return response.json(showToken);
  }

  async create(request, response) {
    const {
      connect
    } = request.body;
    const createTokenStore = new _CreateTokenStoreService.default();
    const tokenStore = await createTokenStore.execute({
      connect
    });
    return response.json((0, _classTransformer.classToClass)(tokenStore));
  }

}

exports.default = TokensStoresControllers;