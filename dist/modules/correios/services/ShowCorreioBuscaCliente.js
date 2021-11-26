"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _buscaCliente = _interopRequireDefault(require("./sigep/buscaCliente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowCorreioBuscaCliente {
  async execute({
    idContrato,
    idCartaoPostagem,
    usuario,
    senha
  }, connect) {
    return await (0, _buscaCliente.default)({
      idContrato,
      idCartaoPostagem,
      usuario,
      senha
    }).then(result => {
      return result;
    }).catch(err => {
      throw new _AppError.default(err.root.Envelope.Body.Fault.faultstring);
    });
  }

}

var _default = ShowCorreioBuscaCliente;
exports.default = _default;