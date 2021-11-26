"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Forma_pagamento = void 0;
let Forma_pagamento;
exports.Forma_pagamento = Forma_pagamento;

(function (Forma_pagamento) {
  Forma_pagamento[Forma_pagamento["Vale Postal"] = 1] = "Vale Postal";
  Forma_pagamento[Forma_pagamento["Reembolso Postal"] = 2] = "Reembolso Postal";
  Forma_pagamento[Forma_pagamento["Contrato de C\xE2mbio"] = 3] = "Contrato de C\xE2mbio";
  Forma_pagamento[Forma_pagamento["Cart\xE3o de Cr\xE9dito"] = 4] = "Cart\xE3o de Cr\xE9dito";
  Forma_pagamento[Forma_pagamento["Outros"] = 5] = "Outros";
})(Forma_pagamento || (exports.Forma_pagamento = Forma_pagamento = {}));