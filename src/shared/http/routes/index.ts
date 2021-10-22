import { Router } from 'express';
import marcasRouter from '@modules/marca/routes/marcas.routes';
import clientesRouter from '@modules/cliente/routes/clientes.routes';
import clientesEnderecosRouter from '@modules/cliente_endereco/routes/clientes_enderecos.routes';
import produtosRouter from '@modules/produtos/routes/produtos.routes';
import produtoSkusRouter from '@modules/produtos_skus/routes/produtos_skus.routes';
import produtoImgsRouter from '@modules/produtos_imgs/routes/produtos_imgs.routes';

const routes = Router();

routes.use('/v1/marcas', marcasRouter);

routes.use('/v1/clientes', clientesRouter);

routes.use('/v1/clientes_enderecos', clientesEnderecosRouter);

routes.use('/v1/produtos', produtosRouter);

routes.use('/v1/produtos_skus', produtoSkusRouter);

routes.use('/v1/produtos_imgs', produtoImgsRouter);

export default routes;
