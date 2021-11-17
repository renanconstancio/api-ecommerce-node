import AppError from '@shared/errors/AppError';
import { ISIGEPSolicitaEtiqueta } from './sigep/types';
import solicitaEtiquetas from './sigep/solicitaEtiquetas';

class ShowCorreioSolicitaEtiqueta {
  public async execute(
    {
      idServico,
      identificador,
      qtdEtiquetas,
      tipoDestinatario,
      usuario,
      senha,
    }: ISIGEPSolicitaEtiqueta,
    connect: string,
  ): Promise<string[]> {
    return await solicitaEtiquetas({
      idServico,
      identificador,
      qtdEtiquetas,
      tipoDestinatario,
      usuario,
      senha,
    })
      .then((result: any) => {
        return result;
      })
      .catch(err => {
        throw new AppError(err.root.Envelope.Body.Fault.faultstring);
      });
  }
}

export default ShowCorreioSolicitaEtiqueta;
