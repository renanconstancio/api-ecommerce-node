"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _UsersSessionsControllers = _interopRequireDefault(require("../controllers/UsersSessionsControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const usersRouter = (0, _express.Router)();
const usersController = new _UsersSessionsControllers.default(); // usersRouter.use(isAuthenticated);
// usersRouter.get('/', usersController.index);
// usersRouter.get(
//   '/:id',
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.number().required(),
//     },
//   }),
//   usersController.show,
// );

usersRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required(),
    connect: _celebrate.Joi.string().allow('teste')
  }
}), usersController.create);
var _default = usersRouter;
exports.default = _default;