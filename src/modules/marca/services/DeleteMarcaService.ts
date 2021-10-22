import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import MarcaRepository from '../typeorm/repositories/MarcaRepository';

interface IRequest {
  id: string;
}

class DeleteMarcaService {
  public async execute({ id }: IRequest): Promise<void> {
    const marcasRepository = getCustomRepository(MarcaRepository);

    const marca = await marcasRepository.findOne(id);

    if (!marca) {
      throw new AppError('Marca not found.');
    }

    marca.excluir = true;

    await marcasRepository.save(marca);

    // await marcasRepository.remove(marca);
  }
}

export default DeleteMarcaService;
