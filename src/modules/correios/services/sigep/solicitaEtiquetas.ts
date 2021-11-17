import { ISIGEPSolicitaEtiqueta, ISigepError } from './types';
import Api from './api';

export default async function solicitaEtiquetas(
  requestData: ISIGEPSolicitaEtiqueta,
): Promise<string[]> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any): void => {
    client.solicitaEtiquetas(
      requestData,
      (error: ISigepError, result: { return: string }) => {
        if (error) {
          reject(error);
        } else {
          const response = result.return.split(',');
          resolve(response);
        }
      },
    );
  });
}
