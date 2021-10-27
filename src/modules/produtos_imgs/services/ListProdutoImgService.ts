import { ParsedQs } from 'qs';
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

interface ISearch {
  order?: string | ParsedQs | string[] | ParsedQs[] | undefined;
}

class ListProdutoImgService {
  public async execute(
    { order }: ISearch,
    connect: string,
  ): Promise<IPaginateProdutoImage> {
    const imagesRepository = getCustomRepository(ProdutoImgRepository, connect);

    const tmp = imagesRepository
      .createQueryBuilder()
      .where('excluir = :excluir', { excluir: 0 });

    if (order === 'asc') tmp.orderBy({ id: 'ASC' });

    if (order === 'desc') tmp.orderBy({ id: 'DESC' });

    const images = await tmp.paginate();

    return images as IPaginateProdutoImage;
  }
}

export default ListProdutoImgService;
