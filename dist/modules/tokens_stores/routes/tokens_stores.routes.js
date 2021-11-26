"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _celebrate = require("celebrate");

var _TokensStoresControllers = _interopRequireDefault(require("../controllers/TokensStoresControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tokensRouter = (0, _express.Router)();
const tokensController = new _TokensStoresControllers.default();
tokensRouter.get('/', tokensController.index);
tokensRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    connect: _celebrate.Joi.string().allow('default')
  }
}), tokensController.create);
var _default = tokensRouter;
exports.default = _default;