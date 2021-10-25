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

class CreateProdutoImgService {
  public async execute(
    { id_produtos, id_produtos_skus, image, ordem, excluir = false }: IRequest,
    connect: string,
  ): Promise<ProdutoImg> {
    const imgsRepository = getCustomRepository(ProdutoImgRepository, connect);

    const sku = imgsRepository.create({
      id_produtos,
      id_produtos_skus,
      image,
      ordem,
      excluir,
    });

    await imgsRepository.save(sku);

    return sku;
  }
}

export default CreateProdutoImgService;
