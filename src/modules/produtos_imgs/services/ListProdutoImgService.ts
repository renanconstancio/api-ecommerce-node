import { getCustomRepository } from 'typeorm';
import ProdutoImg from '../typeorm/entities/ProdutoImg';
import ProdutoImgRepository from '../typeorm/repositories/ProdutoImgRepository';

interface IPaginateProdutoImage {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: ProdutoImg[];
}

class ListProdutoImgService {
  public async execute(connect: string): Promise<IPaginateProdutoImage> {
    const skusRepository = getCustomRepository(ProdutoImgRepository, connect);

    const tmp = skusRepository
      .createQueryBuilder()
      .where('excluir = :excluir', { excluir: 0 })
      .orderBy({ ordem: 'ASC' });

    const images = await tmp.cache(true).paginate();

    return images as IPaginateProdutoImage;
  }
}

export default ListProdutoImgService;
