import { ISIGEPCep, ISIGEPCep2 } from './sigep/types';
import buscaCEP from './sigep/buscaCep';
import AppError from '@shared/errors/AppError';

interface IRequest {
  cep: string;
}

class ShowCorreioBuscaCep {
  public async execute(
    { cep }: IRequest,
    connect: string,
  ): Promise<ISIGEPCep2> {
    return await buscaCEP(cep)
      .then((cepResp: ISIGEPCep) => {
        const { cep, bairro, cidade, complemento2, end, uf } = cepResp;

        return {
          cep: cep,
          bairro: bairro,
          cidade: cidade,
          comp: complemento2,
          end: end,
          uf: uf,
        } as ISIGEPCep2;
      })
      .catch(err => {
        throw new AppError(err.root.Envelope.Body.Fault.faultstring);
      });
  }
}

export default ShowCorreioBuscaCep;
