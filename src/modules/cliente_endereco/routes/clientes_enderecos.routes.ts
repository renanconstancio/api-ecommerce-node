import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ClientesEnderecosController from '../controllers/ClientesEnderecosController';

const clientesEnderecosRouter = Router();
const clientesEnderecosController = new ClientesEnderecosController();

clientesEnderecosRouter.get('/', clientesEnderecosController.index);

clientesEnderecosRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  clientesEnderecosController.show,
);

clientesEnderecosRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      id_clientes: Joi.number().required(),
      nome_endereco: Joi.string().required(),
      nome_recebedor: Joi.string().required(),
      endereco: Joi.string().required(),
      nr: Joi.string().required(),
      bairro: Joi.string().required(),
      complemento: Joi.string().allow(''),
      referencia: Joi.string().allow(''),
      cidade: Joi.string().required(),
      uf: Joi.string().required(),
      cep: Joi.string().required(),
      ativo: Joi.string().allow(1),
      excluir: Joi.string().default(false),
    },
  }),
  clientesEnderecosController.create,
);

clientesEnderecosRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      id_clientes: Joi.number().required(),
      nome_endereco: Joi.string().required(),
      nome_recebedor: Joi.string().required(),
      endereco: Joi.string().required(),
      nr: Joi.string().required(),
      bairro: Joi.string().required(),
      complemento: Joi.string().allow(''),
      referencia: Joi.string().allow(''),
      cidade: Joi.string().required(),
      uf: Joi.string().required(),
      cep: Joi.string().required(),
      ativo: Joi.string().allow(1),
      excluir: Joi.string().default(false),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  clientesEnderecosController.update,
);

clientesEnderecosRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  clientesEnderecosController.delete,
);

export default clientesEnderecosRouter;
