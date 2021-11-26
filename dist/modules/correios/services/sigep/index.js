"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buscaCep = _interopRequireDefault(require("./buscaCep"));

var _solicitaEtiquetas = _interopRequireDefault(require("./solicitaEtiquetas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  buscaCEP: _buscaCep.default,
  solicitaEtiquetas: _solicitaEtiquetas.default
}; // // dados falsos
// 'usuario'           => 'sigep',
// 'senha'             => 'n5f9t8',
// 'codAdministrativo' => '17000190',
// 'numeroContrato'    => '9992157880',
// 'cartaoPostagem'    => '0067599079',
// 'cnpjEmpresa'       => '34028316000103', // Obtido no método 'buscaCliente'.
// 'anoContrato'       => null, // Não consta no manual.
// 'diretoria'         => new Diretoria(Diretoria::DIRETORIA_DR_BRASILIA), // Obtido no método 'buscaCliente'.

exports.default = _default;