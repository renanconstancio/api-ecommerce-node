"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buscaCep = _interopRequireDefault(require("./sigep/buscaCep"));

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShowCorreioBuscaCep {
  async execute({
    cep
  }, connect) {
    return await (0, _buscaCep.default)(cep).then(cepResp => {
      const {
        cep,
        bairro,
        cidade,
        complemento2,
        end,
        uf
      } = cepResp;
      return {
        cep: cep,
        bairro: bairro,
        cidade: cidade,
        comp: complemento2,
        end: end,
        uf: uf
      };
    }).catch(err => {
      throw new _AppError.default(err.root.Envelope.Body.Fault.faultstring);
    });
  }

}

var _default = ShowCorreioBuscaCep;
exports.default = _default;