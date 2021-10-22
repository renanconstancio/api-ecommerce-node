// import redisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Marca from '../typeorm/entities/Marca';
import MarcaRepository from '../typeorm/repositories/MarcaRepository';

interface IRequest {
  cod: string;
  marca: string;
  postagem: string;
  visivel: boolean;
  excluir?: boolean;
}

class CreateMarcaService {
  public async execute({
    cod,
    marca,
    postagem,
    visivel = true,
    excluir = false,
  }: IRequest): Promise<Marca> {
    const marcasRepository = getCustomRepository(MarcaRepository);
    const codExists = await marcasRepository.findByCod(cod);

    if (codExists) {
      throw new AppError('There is already one Marca código with this cod');
    }

    const marcaResp = marcasRepository.create({
      cod,
      marca,
      postagem,
      visivel,
      excluir,
    });

    await marcasRepository.save(marcaResp);

    return marcaResp;
  }
}

export default CreateMarcaService;
