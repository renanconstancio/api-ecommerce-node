"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fechaPlpVariosServicos;

var _api = _interopRequireDefault(require("./api"));

var _exportXml = _interopRequireDefault(require("./exportXml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function fechaPlpVariosServicos(plp, objeto_postal, requestData) {
  const client = await _api.default.clientSoap();
  const JS2XML = await (0, _exportXml.default)(plp, objeto_postal);
  return new Promise((resolve, reject) => {
    client.fechaPlpVariosServicos({
      xml: JS2XML,
      ...requestData
    }, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.return);
      }
    });
  });
}