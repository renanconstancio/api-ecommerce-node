// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function completeZeroNumber(numero: any): string {
  //não permite string não numerica no complemento
  if (RegExp(/\D/).test(numero)) {
    return '000000';
  } else {
    numero = numero.split('');
    const count = numero.length;

    for (let i = 0; i < 6 - count; i++) {
      numero.unshift('0');
    }

    return numero.join('');
  }
}
