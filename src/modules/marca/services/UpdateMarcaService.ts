import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Marca from '../typeorm/entities/Marca';
import MarcaRepository from '../typeorm/repositories/MarcaRepository';

interface IRequest {
  id: string;
  cod: string;
  marca: string;
  postagem?: string;
  visivel?: boolean;
  excluir?: boolean;
}

class UpdateMarcaService {
  public async execute(
    {
      id,
      cod,
      marca,
      postagem = '',
      visivel = true,
      excluir = false,
    }: IRequest,
    connect: string,
  ): Promise<Marca> {
    const marcasRepository = getCustomRepository(MarcaRepository, connect);

    const marcaRes = await marcasRepository.findOne(id);

    if (!marcaRes) {
      throw new AppError('Marcas not found.');
    }

    marcaRes.cod = cod;
    marcaRes.marca = marca;
    marcaRes.postagem = postagem;
    marcaRes.visivel = visivel;
    marcaRes.excluir = excluir;

    await marcasRepository.save(marcaRes);

    return marcaRes;
  }
}

export default UpdateMarcaService;
