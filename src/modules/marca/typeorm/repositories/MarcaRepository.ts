import { EntityRepository, In, Repository } from 'typeorm';
import Marca from '../entities/Marca';

interface IFindMarcas {
  id: number;
}

@EntityRepository(Marca)
class MarcaRepository extends Repository<Marca> {
  public async findByCod(cod: string): Promise<Marca | undefined> {
    const marcaResp = this.findOne({
      where: {
        cod,
      },
    });

    return marcaResp;
  }

  public async findByName(marca: string): Promise<Marca | undefined> {
    const marcaResp = this.findOne({
      where: {
        marca,
      },
    });

    return marcaResp;
  }

  public async findAllByIds(marcas: IFindMarcas[]): Promise<Marca[]> {
    const marcaIds = marcas.map(marca => marca.id);

    const existentMarcas = await this.find({
      where: {
        id: In(marcaIds),
      },
    });

    return existentMarcas;
  }
}

export default MarcaRepository;
