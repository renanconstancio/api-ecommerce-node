import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Marca from '../typeorm/entities/Marca';
import MarcaRepository from '../typeorm/repositories/MarcaRepository';

interface IRequest {
  id: string;
}

class ShowMarcaService {
  public async execute({ id }: IRequest): Promise<Marca> {
    const marcasRepository = getCustomRepository(MarcaRepository);

    const marca = await marcasRepository.findOne(id);

    if (!marca) {
      throw new AppError('Marcas not found.');
    }

    return marca;
  }
}

export default ShowMarcaService;
