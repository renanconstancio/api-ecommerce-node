// pega o digito verificador do cep Ex: CEP: 71010050 7+1+0+1+0+0+5+0 = 14 Subtrai-se 14 e 20
export const digitoVerificadorCEP = (cep: string) => {
  const multiplos10 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let valor = 0;
  let digito = -1;

  cep = cep.split('');

  cep.map(numero => {
    valor = valor + parseInt(numero);
  });

  multiplos10.map(mult => {
    if (digito === -1 && mult > valor) {
      digito = mult - valor;
    }
  });

  return digito;
};
