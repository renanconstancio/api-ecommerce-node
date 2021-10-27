import { getCustomRepository } from 'typeorm';
import ProdutoImg from '../typeorm/entities/ProdutoImg';
import ProdutoImgRepository from '../typeorm/repositories/ProdutoImgRepository';

interface IRequest {
  id_produtos: number;
  id_produtos_skus: number;
  image: string;
  ordem: number;
  excluir?: boolean;
}
/**
 * Classe implementa uma insersão de dados como array, podendo conter n dados de insersão
 */

class CreateProdutoImgService {
  public async execute(
    dataImgService: IRequest[],
    connect: string,
  ): Promise<ProdutoImg[]> {
    const imgsRepository = getCustomRepository(ProdutoImgRepository, connect);

    const sku = imgsRepository.create(dataImgService);

    await imgsRepository.save(sku);

    return sku;
  }
}

export default CreateProdutoImgService;
