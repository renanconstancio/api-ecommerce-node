"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printEtiquetas = printEtiquetas;

var _path = _interopRequireDefault(require("path"));

var _ejs = _interopRequireDefault(require("ejs"));

var _generateBarcode = require("../utils/generateBarcode128");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/waldsonvital/sigep-node
function printEtiquetas(request, response) {
  const logoStoreTemplate = _path.default.resolve('..', '..', '..', '..', 'services', 'prints');

  const ejsTemplate = _path.default.resolve(__dirname, '..', '..', '..', '..', '..', 'views');

  const htmlTemplate = `${ejsTemplate}/etiqueta.ejs`;
  const imgBase64 = 'data:image/png;base64,';
  const barCode128 = (0, _generateBarcode.generateBarcode128)({
    code: 'PK405950706BR'
  });

  _ejs.default.renderFile(htmlTemplate, {
    imgLogo: '/images/correios-logo.png',
    imgService: '/images/simbolo-sedex-expresso.png',
    codEtiqueta: `${imgBase64}${barCode128}`,
    qrCode: '',
    variavel: imgBase64,
    // Dados do destinatario
    destinatario: {
      destinatario: 'Renan Constancio',
      endereco: 'Nome da Rua',
      complemento: 'Nome da Rua',
      nr: '1010',
      cidade: 'Itápolis',
      uf: 'SP',
      cep: '14900-000'
    },
    // Dados do Remetente
    remetente: {
      remetente: 'asdf',
      cep: '14900-000'
    }
  }, (error, html) => {
    if (error) {
      return response.status(505).json({
        deu: 'asdfsd',
        dir: ejsTemplate
      });
    } else {
      response.end(html); // pdf
      //   .create(html, {
      //     format: 'A4',
      //     height: '138.11mm',
      //     width: '106.36mm',
      //     border: '5mm',
      //   })
      //   .toBuffer((err, buffer) => {
      //     if (err) return response.status(505).json('err');
      //     response.contentType('application/pdf');
      //     response.end(buffer);
      //   });
    }
  });
}