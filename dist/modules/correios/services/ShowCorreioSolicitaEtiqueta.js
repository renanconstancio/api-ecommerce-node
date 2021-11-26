"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _solicitaEtiquetas = _interopRequireDefault(require("./sigep/solicitaEtiquetas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowCorreioSolicitaEtiqueta {
  async execute({
    idServico,
    identificador,
    qtdEtiquetas,
    tipoDestinatario,
    usuario,
    senha
  }, connect) {
    return await (0, _solicitaEtiquetas.default)({
      idServico,
      identificador,
      qtdEtiquetas,
      tipoDestinatario,
      usuario,
      senha
    }).then(result => {
      return result;
    }).catch(err => {
      throw new _AppError.default(err.root.Envelope.Body.Fault.faultstring);
    });
  }

}

var _default = ShowCorreioSolicitaEtiqueta;
exports.default = _default;