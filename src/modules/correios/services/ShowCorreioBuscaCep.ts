import { ICep, ICep2 } from '../sigep/types';
import AppError from '@shared/errors/AppError';
import buscaCEP from '../sigep/buscaCep';

interface IRequest {
  cep: string;
}

class ShowCorreioBuscaCep {
  public async execute({ cep }: IRequest, connect: string): Promise<ICep2> {
    return await buscaCEP(cep)
      .then((cepResp: ICep) => {
        const { cep, bairro, cidade, complemento2, end, uf } = cepResp;

        return {
          cep: cep,
          bairro: bairro,
          cidade: cidade,
          comp: complemento2,
          end: end,
          uf: uf,
        } as ICep2;
      })
      .catch(() => {
        throw new AppError(
          'Invalid zip code or temporarily unavailable service.',
        );
      });
  }
}

export default ShowCorreioBuscaCep;
