import { EntityRepository, In, Repository } from 'typeorm';
import Categoria from '../entities/Categoria';

interface IFindCategorias {
  id: number;
}

@EntityRepository(Categoria)
class CategoriaRepository extends Repository<Categoria> {
  public async findByCategoria(
    categoria: string,
  ): Promise<Categoria | undefined> {
    const rws = this.findOne({
      where: {
        categoria: categoria.trim(),
      },
    });

    return rws;
  }

  public async findByDescription(
    description: string,
  ): Promise<Categoria | undefined> {
    const rws = this.findOne({
      where: {
        description,
      },
    });

    return rws;
  }

  public async findAllByIds(
    categorias: IFindCategorias[],
  ): Promise<Categoria[]> {
    const rwsIds = categorias.map(categoria => categoria.id);

    const existCategorias = await this.find({
      where: {
        id: In(rwsIds),
      },
    });

    return existCategorias;
  }
}

export default CategoriaRepository;
