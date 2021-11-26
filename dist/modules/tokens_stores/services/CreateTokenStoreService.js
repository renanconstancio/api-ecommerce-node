"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../../../config/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateTokenStoreService {
  async execute({
    connect = 'ecomnodedb2'
  }) {
    const token = (0, _jsonwebtoken.sign)({
      connect: connect
    }, _auth.default.jwt.secret);
    return {
      token
    };
  }

}

var _default = CreateTokenStoreService;
exports.default = _default;