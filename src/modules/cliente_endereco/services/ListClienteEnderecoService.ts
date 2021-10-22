import { getCustomRepository } from 'typeorm';
import ClienteEndereco from '../typeorm/entities/ClienteEndereco';
import ClienteEndercoRepository from '../typeorm/repositories/ClienteEnderecoRepository';

interface IPaginateClienteEndereco {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: ClienteEndereco[];
}

class ListClienteEnderecoService {
  public async execute(): Promise<IPaginateClienteEndereco> {
    const clientesEndercosRepository = getCustomRepository(
      ClienteEndercoRepository,
    );

    // const redisCache = new RedisCache();
    // const marcas = await redisCache.recover<IPaginateCliente>('api-MARCA_LIST');
    // if (!marcas) {
    //   // marcas = await marcasRepository.find();
    //   const marcas = await marcasRepository.createQueryBuilder().paginate();
    //   await redisCache.save('api-MARCA_LIST', marcas);
    // }

    const enderecos = await clientesEndercosRepository
      .createQueryBuilder()
      .paginate();

    return enderecos as IPaginateClienteEndereco;
  }
}

export default ListClienteEnderecoService;
