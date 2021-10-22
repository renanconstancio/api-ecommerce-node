import { getCustomRepository } from 'typeorm';
import ProdutoRepository from '../typeorm/repositories/ProdutoRepository';
import Produto from '../typeorm/entities/Produto';
import { ParsedQs } from 'qs';

interface IPaginateProduto {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Produto[];
}

interface ISearch {
  nome?: string | ParsedQs | string[] | ParsedQs[] | undefined;
  order_nome?: string | ParsedQs | string[] | ParsedQs[] | undefined;
}

class ListProdutoService {
  public async execute({
    nome,
    order_nome,
  }: ISearch): Promise<IPaginateProduto> {
    const produtosRepository = getCustomRepository(ProdutoRepository);

    const tmp = produtosRepository
      .createQueryBuilder()
      .where('excluir = :excluir', { excluir: 0 });

    if (nome) tmp.andWhere('nome like :nome', { nome: nome });

    if (order_nome === 'asc') tmp.orderBy({ nome: 'ASC' });

    if (order_nome === 'desc') tmp.orderBy({ nome: 'DESC' });

    const produtos = await tmp.cache(true).paginate();

    return produtos as IPaginateProduto;
  }
}

export default ListProdutoService;
