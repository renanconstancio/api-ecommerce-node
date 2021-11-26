"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateDatamatrix = void 0;

var _bwipJs = _interopRequireDefault(require("bwip-js"));

var _completeZeroNumber = require("./completeZeroNumber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateDatamatrix = async ({
  postagem,
  remetente,
  plp
}) => {
  const numero_remetente = (0, _completeZeroNumber.completeZeroNumber)(remetente.numero_remetente);
  let string = postagem.nacional.cep_destinatario;
  string = string + (0, _completeZeroNumber.completeZeroNumber)(postagem.destinatario.numero_end_destinatario);
  string = string + remetente.cep_remetente;
  string = string + numero_remetente;
  string = string + (void 0)._digitoVerificadorCEP(postagem.nacional.cep_destinatario);
  string = string + '51';
  string = string + postagem.numero_etiqueta;
  string = string + (void 0)._getServicosAdicionais(postagem.servico_adicional.codigo_servico_adicional);
  string = string + plp.cartao_postagem;
  string = string + postagem.codigo_servico_postagem;
  string = string + '01';
  string = string + numero_remetente;
  string = string + (0, _completeZeroNumber.completeZeroNumber)(postagem.servico_adicional.valor_declarado).substr(1, 5);
  string = string + (void 0)._phoneLenght(postagem.destinatario.telefone_destinatario);
  string = string + '-00.000000';
  string = string + '-00.000000';
  string = string + '|'; // datamatrix

  const qrcode = await _bwipJs.default.toBuffer({
    bcid: 'datamatrix',
    text: string,
    rows: 48,
    columns: 48
  });
  return Buffer.from(qrcode).toString('base64');
};

exports.generateDatamatrix = generateDatamatrix;