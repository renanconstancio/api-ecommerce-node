"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

var _AppError = _interopRequireDefault(require("../../errors/AppError"));

var _auth = _interopRequireDefault(require("../../../config/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class para verificacao do usuario authenticado
 * NOTA:
 * @param request Request
 * @param response Response
 * @param next NexFunction
 * @returns Dados de connection e de usuario
 */
function isAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new _AppError.default('JWT Token is missing.');
  } // Bearer sdlkfjsldkfjlsjfffdklfjdflksjflkjfdlk3405905


  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = (0, _jsonwebtoken.verify)(token, _auth.default.jwt.secret);
    const decode = decodedToken; // Adicionar um paramentro de conexao dentro do express

    request.connect = decode.connect; // Adicionar um paramentro de usuario dentro do express

    request.user = {
      id: decode.id
    };
    return next();
  } catch {
    throw new _AppError.default('Invalid JWT Token.');
  }
}