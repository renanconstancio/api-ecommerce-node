import { Router } from 'express';
import marcasRouter from '@modules/marca/routes/marcas.routes';
import clientesRouter from '@modules/cliente/routes/clientes.routes';
import produtosRouter from '@modules/produtos/routes/produtos.routes';
import produtoSkusRouter from '@modules/produtos_skus/routes/produtos_skus.routes';
// import productsRouter from '@modules/produto/routes/products.routes';
// import usersRouter from '@modules/users/routes/users.routes';
// import sessionsRouter from '@modules/users/routes/sessions.routes';
// import passwordRouter from '@modules/users/routes/password.routes';
// import profileRouter from '@modules/users/routes/profile.routes';
// import customersRouter from '@modules/customers/routes/customers.routes';
// import ordersRouter from '@modules/orders/routes/orders.routes';

const routes = Router();

routes.use('/v1/marcas', marcasRouter);
routes.use('/v1/clientes', clientesRouter);
routes.use('/v1/produtos', produtosRouter);
routes.use('/v1/produtos_skus', produtoSkusRouter);

export default routes;
