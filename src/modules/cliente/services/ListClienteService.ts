import { getCustomRepository } from 'typeorm';
import ClienteRepository from '../typeorm/repositories/ClienteRepository';
import Cliente from '../typeorm/entities/Cliente';

interface IPaginateCliente {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Cliente[];
}

class ListClienteService {
  public async execute(): Promise<IPaginateCliente> {
    const clientesRepository = getCustomRepository(ClienteRepository);

    // const redisCache = new RedisCache();
    // const marcas = await redisCache.recover<IPaginateCliente>('api-MARCA_LIST');
    // if (!marcas) {
    //   // marcas = await marcasRepository.find();
    //   const marcas = await marcasRepository.createQueryBuilder().paginate();
    //   await redisCache.save('api-MARCA_LIST', marcas);
    // }

    const marcas = await clientesRepository.createQueryBuilder().paginate();
    return marcas as IPaginateCliente;
  }
}

export default ListClienteService;
