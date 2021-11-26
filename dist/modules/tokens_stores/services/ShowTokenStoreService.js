"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../../../config/auth"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowTokenStoreService {
  async execute({
    token
  }) {
    try {
      const decodedToken = (0, _jsonwebtoken.verify)(token, _auth.default.jwt.secret);
      return decodedToken;
    } catch {
      throw new _AppError.default('Invalid JWT Token s.');
    }
  }

}

var _default = ShowTokenStoreService;
exports.default = _default;