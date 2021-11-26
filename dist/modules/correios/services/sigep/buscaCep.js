"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buscaCEP;

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function buscaCEP(cep) {
  const client = await _api.default.clientSoap();
  return new Promise((resolve, reject) => {
    client.consultaCEP({
      cep
    }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.return);
      }
    });
  });
}