import { EntityRepository, Repository } from 'typeorm';
import ProdutoImg from '../entities/ProdutoImg';

@EntityRepository(ProdutoImg)
class ProdutoImgRepository extends Repository<ProdutoImg> {}

export default ProdutoImgRepository;
