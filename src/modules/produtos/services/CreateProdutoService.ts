// import redisCache from '@shared/cache/RedisCache';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ProdutoRepository from '../typeorm/repositories/ProdutoRepository';
import Produto from '../typeorm/entities/Produto';

interface IRequest {
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

class CreateProdutoService {
  public async execute(
    {
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
    const nomeExists = await produtosRepository.findByName(nome);

    if (nomeExists) {
      throw new AppError('There is already one name');
    }

    const produto = produtosRepository.create({
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
      visivel,
      ativo,
      excluir,
    });

    await produtosRepository.save(produto);

    return produto;
  }
}

export default CreateProdutoService;
