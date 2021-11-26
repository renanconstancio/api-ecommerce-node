"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buscaCliente;

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function buscaCliente(userData) {
  const client = await _api.default.clientSoap();
  return new Promise((resolve, reject) => {
    client.buscaCliente(userData, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.return);
      }
    });
  });
}