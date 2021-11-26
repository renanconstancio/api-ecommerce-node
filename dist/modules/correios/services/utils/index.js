"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.etiquetasComDigito = etiquetasComDigito;
exports.etiquetasRange = etiquetasRange;
exports.etiquetasRangeComDigito = etiquetasRangeComDigito;
exports.etiquetasRangeSemEspaco = etiquetasRangeSemEspaco;
exports.etiquetasSemEspaco = etiquetasSemEspaco;

var _digitoVerificador = require("./digitoVerificador");

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/**
 * @desc Na montagem do PLP no campo <numero_etiqueta> é necessário o envio das
 * etiquetas com o Digito
 */
function etiquetasComDigito(etiquetas) {
  return etiquetas.map(etiqueta => (0, _digitoVerificador.digitoVerificador)(etiqueta));
}
/**
 * @desc Na montagem do PLP no campo <listaEtiquetas> é necessário o envio das
 * etiquetas sem DIGITO e sem ESPAÇO
 */


function etiquetasSemEspaco(etiquetas) {
  return etiquetas.map(etiqueta => etiqueta.replace(' ', ''));
}
/**@desc Função que retorna todas as etiquetas de acordo com o range passado.
 * Na montagem do PLP no campo <numero_etiqueta> é necessário o envio das
 * etiquetas com o Digito
 */


function etiquetasRangeComDigito(etiquetas) {
  return etiquetasRange(etiquetas, true);
}
/**@desc Função que retorna todas as etiquetas de acordo com o range passado.
 * Na montagem do PLP no campo <listaEtiquetas> é necessário o envio das
 * etiquetas sem DIGITO e sem ESPAÇO
 */


function etiquetasRangeSemEspaco(etiquetas) {
  return etiquetasRange(etiquetas, false);
}

function etiquetasRange(etiquetas, isDigit) {
  const inicio = parseInt(etiquetas[0].substring(2, 10));
  const fim = parseInt(etiquetas[1].substring(2, 10));
  const prefix = etiquetas[0].substring(0, 2);
  const sufix = etiquetas[0].substring(10).trim();
  const etiquetasList = [];

  if (isDigit) {
    for (let etiqueta = inicio; etiqueta <= fim; etiqueta++) {
      etiquetasList.push((0, _digitoVerificador.digitoVerificador)(`${prefix}${etiqueta.toString().padStart(8, '0')} ${sufix}`));
    }
  } else {
    for (let etiqueta = inicio; etiqueta <= fim; etiqueta++) {
      etiquetasList.push(`${prefix}${etiqueta.toString().padStart(8, '0')}${sufix}`);
    }
  }

  return etiquetasList;
}