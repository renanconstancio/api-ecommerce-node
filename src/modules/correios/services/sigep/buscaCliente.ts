import { ISigepError, ISIGEPBuscaCliente, ISIGEPCliente } from './types';
import Api from './api';

export default async function buscaCliente(
  userData: ISIGEPBuscaCliente,
): Promise<ISIGEPCliente> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any) => {
    client.buscaCliente(
      userData,
      (error: ISigepError, result: { return: ISIGEPCliente }) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.return);
        }
      },
    );
  });
}
