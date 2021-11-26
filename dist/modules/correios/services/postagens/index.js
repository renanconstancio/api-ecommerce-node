"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pac = _interopRequireDefault(require("./pac"));

var _sedex = _interopRequireDefault(require("./sedex"));

var _carta = _interopRequireDefault(require("./carta"));

var _grandesFormatos = _interopRequireDefault(require("./grandesFormatos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Pac: _pac.default,
  Sedex: _sedex.default,
  Carta: _carta.default,
  GrandesFormatos: _grandesFormatos.default
};
exports.default = _default;