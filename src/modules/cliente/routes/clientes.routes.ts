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
      cnpj: Joi.string().allow(''),
      ie: Joi.string().allow(''),
      cpf: Joi.string().allow(''),
      rg: Joi.string().allow(''),
      telefone: Joi.string().required(),
      celular: Joi.string().allow(''),
      operadora: Joi.string().allow(''),
      nascim: Joi.string().allow(''),
      admin: Joi.boolean().allow(false),
      excluir: Joi.boolean().allow(false),
    },
  }),
  clientesController.create,
);

clientesRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      email: Joi.string().required(),
      senha: Joi.string().required(),
      cnpj: Joi.string().allow(''),
      ie: Joi.string().allow(''),
      cpf: Joi.string().allow(''),
      rg: Joi.string().allow(''),
      telefone: Joi.string().required(),
      celular: Joi.string().allow(''),
      operadora: Joi.string().allow(''),
      nascim: Joi.string().allow(''),
      admin: Joi.boolean().allow(false),
      excluir: Joi.boolean().allow(false),
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
