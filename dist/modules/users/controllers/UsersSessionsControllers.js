"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classTransformer = require("class-transformer");

var _CreateSessionUserService = _interopRequireDefault(require("../services/CreateSessionUserService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UsersSessionsControllers {
  async create(request, response) {
    const {
      connect,
      email,
      password
    } = request.body;
    const createSessionToken = new _CreateSessionUserService.default();
    const session = await createSessionToken.execute({
      connect,
      email,
      password
    });
    return response.json((0, _classTransformer.classToClass)(session));
  }

}

exports.default = UsersSessionsControllers;