import Api from './api';
import { ISigepError, ISIGEPCep } from './types';

export default async function buscaCEP(cep: string): Promise<ISIGEPCep> {
  const client = await Api.clientSoap();

  return new Promise((resolve, reject: any): void => {
    client.consultaCEP(
      { cep },
      (error: ISigepError, result: { return: ISIGEPCep }) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.return);
        }
      },
    );
  });
}
