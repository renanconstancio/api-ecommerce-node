"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = solicitaEtiquetas;

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function solicitaEtiquetas(requestData) {
  const client = await _api.default.clientSoap();
  const {
    tipoDestinatario,
    qtdEtiquetas,
    identificador,
    idServico,
    usuario,
    senha
  } = requestData;
  const teste = [];

  const newSolicitaEtiqueta = () => new Promise(resolve => {
    client.solicitaEtiquetas({
      tipoDestinatario,
      identificador,
      idServico,
      qtdEtiquetas: 1,
      usuario,
      senha
    }, (_error, result) => {
      const response = result.return.split(',');
      resolve(response[0]);
    });
  });

  for (let i = 0; i < qtdEtiquetas; i++) {
    teste.push(await newSolicitaEtiqueta());
  }

  return teste; // return new Promise((resolve, reject: any): void => {
  //   client.solicitaEtiquetas(
  //     {
  //       tipoDestinatario,
  //       identificador,
  //       idServico,
  //       qtdEtiquetas: 1,
  //       usuario,
  //       senha,
  //     },
  //     (error: ISigepError, result: { return: string }) => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         const response = result.return.split(',');
  //         resolve(response);
  //       }
  //     },
  //   );
  // });
}