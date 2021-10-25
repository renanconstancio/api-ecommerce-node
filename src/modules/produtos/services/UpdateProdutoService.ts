import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoRepository from '../typeorm/repositories/ProdutoRepository';
import Produto from '../typeorm/entities/Produto';

interface IRequest {
  id: string;
  id_marcas: number;
  nome: string;
  subnome: string;
  descricao: string;
  postagem: string;
  ncm: string;
  csosn: string;
  cfop: string;
  cest: string;
  cst: string;
  unid: string;
  ativo?: boolean;
  visivel?: boolean;
  excluir?: boolean;
}

class UpdateProdutoService {
  public async execute(
    {
      id,
      id_marcas,
      nome,
      subnome,
      descricao,
      postagem,
      ncm,
      csosn,
      cfop,
      cest,
      cst,
      unid,
      ativo = true,
      visivel = true,
      excluir = false,
    }: IRequest,
    connect: string,
  ): Promise<Produto> {
    const produtosRepository = getCustomRepository(ProdutoRepository, connect);

    const produto = await produtosRepository.findOne(id);

    if (!produto) {
      throw new AppError('Produtos not found.');
    }

    produtosRepository.merge(produto, {
      id_marcas: id_marcas,
      nome: nome,
      subnome: subnome,
      descricao: descricao,
      postagem: postagem,
      ncm: ncm,
      csosn: csosn,
      cfop: cfop,
      cest: cest,
      cst: cst,
      unid: unid,
      ativo: ativo,
      visivel: visivel,
      excluir: excluir,
    });

    await produtosRepository.save(produto);

    return produto;
  }
}

export default UpdateProdutoService;
