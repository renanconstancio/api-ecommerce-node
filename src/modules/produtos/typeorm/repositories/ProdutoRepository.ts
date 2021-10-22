import { EntityRepository, In, Repository } from 'typeorm';
import Produto from '../entities/Produto';

interface IFindProdutos {
  id: number;
}

@EntityRepository(Produto)
class ProdutoRepository extends Repository<Produto> {
  public async findByName(nome: string): Promise<Produto | undefined> {
    const produto = this.findOne({
      where: {
        nome,
      },
    });

    return produto;
  }

  public async findAllByIds(produtos: IFindProdutos[]): Promise<Produto[]> {
    const produtoIds = produtos.map(p => p.id);

    const existentProdutos = await this.find({
      where: {
        id: In(produtoIds),
      },
    });

    return existentProdutos;
  }
}

export default ProdutoRepository;
