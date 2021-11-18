import Api from './api';
import { ISIGEPSolicitaEtiqueta, ISigepError } from './types';

export default async function solicitaEtiquetas(
  requestData: ISIGEPSolicitaEtiqueta,
): Promise<string[]> {
  const client = await Api.clientSoap();

  const {
    tipoDestinatario,
    qtdEtiquetas,
    identificador,
    idServico,
    usuario,
    senha,
  } = requestData;
  const teste: string[] = [];

  const newSolicitaEtiqueta = (): Promise<string> =>
    new Promise(resolve => {
      client.solicitaEtiquetas(
        {
          tipoDestinatario,
          identificador,
          idServico,
          qtdEtiquetas: 1,
          usuario,
          senha,
        },
        (_error: ISigepError, result: { return: string }) => {
          const response = result.return.split(',');
          resolve(response[0]);
        },
      );
    });

  for (let i = 0; i < qtdEtiquetas; i++) {
    teste.push(await newSolicitaEtiqueta());
  }

  return teste;

  // return new Promise((resolve, reject: any): void => {
  //   client.solicitaEtiquetas(
  //     {
  //       tipoDestinatario,
  //       identificador,
  //       idServico,
  //       qtdEtiquetas: 1,
  //       usuario,
  //       senha,
  //     },
  //     (error: ISigepError, result: { return: string }) => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         const response = result.return.split(',');
  //         resolve(response);
  //       }
  //     },
  //   );
  // });
}
