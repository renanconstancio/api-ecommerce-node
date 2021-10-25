import { Router } from 'express';
import ClientesController from '../controllers/ClientesController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const clientesRouter = Router();
const clientesController = new ClientesController();

clientesRouter.use(isAuthenticated);

clientesRouter.get('/', clientesController.index);

clientesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  clientesController.show,
);

clientesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      email: Joi.string().required(),
      senha: Joi.string().required(),
      cnpj: Joi.string().required(),
      ie: Joi.string().required(),
      cpf: Joi.string().required(),
      rg: Joi.string().required(),
      telefone: Joi.string().required(),
      celular: Joi.string().required(),
      operadora: Joi.string().required(),
      nascim: Joi.string().required(),
      admin: Joi.boolean(),
      excluir: Joi.boolean(),
    },
  }),
  clientesController.create,
);

clientesRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      cod: Joi.string().required(),
      marca: Joi.string().required(),
      postagem: Joi.string(),
      visivel: Joi.boolean(),
      excluir: Joi.boolean(),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  clientesController.update,
);

clientesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  clientesController.delete,
);

export default clientesRouter;
