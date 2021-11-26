"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _soap = require("soap");

const correiosURL = type => `https://${type}.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl`;

class Api {
  static async clientSoap() {
    let url;

    if (process.env.APPHOM) {
      url = correiosURL('apphom');
    } else {
      url = correiosURL('apps');
    }

    return await (0, _soap.createClientAsync)(url);
  }

}

exports.default = Api;