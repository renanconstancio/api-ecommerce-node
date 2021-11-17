import AppError from '@shared/errors/AppError';
import buscaCliente from './sigep/buscaCliente';
import { ISIGEPBuscaCliente } from './sigep/types';

class ShowCorreioBuscaCliente {
  public async execute(
    { idContrato, idCartaoPostagem, usuario, senha }: ISIGEPBuscaCliente,
    connect: string,
  ): Promise<string[]> {
    return await buscaCliente({ idContrato, idCartaoPostagem, usuario, senha })
      .then((result: any) => {
        return result;
      })
      .catch(err => {
        throw new AppError(err.root.Envelope.Body.Fault.faultstring);
      });
  }
}

export default ShowCorreioBuscaCliente;
