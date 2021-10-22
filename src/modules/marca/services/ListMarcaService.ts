import { getCustomRepository } from 'typeorm';
import MarcaRepository from '../typeorm/repositories/MarcaRepository';
import Marca from '../typeorm/entities/Marca';
import { ParsedQs } from 'qs';

interface IPaginateMarca {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Marca[];
}

interface ISearch {
  cod: string | ParsedQs | string[] | ParsedQs[] | undefined;
  marca: string | ParsedQs | string[] | ParsedQs[] | undefined;
  order: string | ParsedQs | string[] | ParsedQs[] | undefined;
}

class ListMarcaService {
  public async execute({
    marca,
    cod,
    order = 'ASC',
  }: ISearch): Promise<IPaginateMarca> {
    const marcasRepository = getCustomRepository(MarcaRepository);

    const tmp = marcasRepository
      .createQueryBuilder()
      .where('excluir = :excluir', { excluir: 0 });

    if (marca) tmp.andWhere('marca like :marca', { marca: marca });

    if (cod) tmp.andWhere('cod like :cod', { cod: cod });

    if (order === 'ASC') tmp.orderBy({ marca: order });

    if (order === 'DESC') tmp.orderBy({ marca: order });

    const marcas = await tmp.cache(true).paginate();

    return marcas as IPaginateMarca;
  }
}

export default ListMarcaService;
