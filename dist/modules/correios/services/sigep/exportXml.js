"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exportXml;

var _xmlJs = require("xml-js");

var _libxmljs = require("libxmljs");

var _xmlValidator = require("../utils/xmlValidator");

async function exportXml(plp, objeto_postal) {
  const objeto_postal_length = objeto_postal.length;

  if (objeto_postal_length > 1000) {
    return 'Só é permitido enviar 1000 encomendas por PLP';
  } else if (objeto_postal_length === 0) {
    return 'Adicione pelo menos 1 encomenda';
  }

  const JS2XML = '<?xml version="1.0" encoding="ISO-8859-1"?>' + (0, _xmlJs.js2xml)({
    correioslog: { ...plp,
      objeto_postal
    }
  }, {
    compact: true,
    ignoreComment: true,
    spaces: 0
  });
  const XMLValidator = (0, _libxmljs.parseXml)(_xmlValidator.xml2string);
  const XMLDocValidator = (0, _libxmljs.parseXml)(JS2XML);

  if (XMLDocValidator.validate(XMLValidator)) {
    return JS2XML;
  } else {
    return XMLDocValidator.validationErrors;
  }
}