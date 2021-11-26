"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _jsonwebtoken = require("jsonwebtoken");

var _bcryptjs = require("bcryptjs");

var _typeorm = require("typeorm");

var _auth = _interopRequireDefault(require("../../../config/auth"));

var _ClienteRepository = _interopRequireDefault(require("../../cliente/typeorm/repositories/ClienteRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateSessionUserService {
  async execute({
    connect = 'connect',
    email,
    password
  }) {
    const clienteRepository = (0, _typeorm.getCustomRepository)(_ClienteRepository.default);
    const user = await clienteRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.default('Incorrect email/password combination.', 401);
    }

    const passwordConfimed = await (0, _bcryptjs.compare)(password, user.senha);

    if (!passwordConfimed) {
      throw new _AppError.default('Incorrect email/password combination.', 401);
    }

    const token = (0, _jsonwebtoken.sign)({
      id: user.id,
      email: user.email,
      name: user.nome,
      admin: user.admin,
      connect: connect,
      scope: []
    }, _auth.default.jwt.secret, {
      expiresIn: 3600 * 12
    });
    return {
      token
    };
  }

}

var _default = CreateSessionUserService;
exports.default = _default;