import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ProdutosImgsController from '../controllers/ProdutosImgsController';

const produtosImgsRouter = Router();
const produtosImgsController = new ProdutosImgsController();

produtosImgsRouter.get('/', produtosImgsController.index);

produtosImgsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosImgsController.show,
);

produtosImgsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      id_produtos: Joi.number().required(),
      skus: Joi.string().required(),
      codigo: Joi.string().allow(''),
      codigo_barras: Joi.string().allow(''),
      referencia: Joi.string().allow(''),
      estoque: Joi.number().required(),
      preco_custo: Joi.number().required(),
      preco_venda: Joi.number().required(),
      preco_promo: Joi.number().required(),
      altura: Joi.number().default('5'),
      largura: Joi.number().default('11'),
      comprimento: Joi.number().default('16'),
      peso: Joi.number().default('0.300'),
      excluir: Joi.boolean().default(false),
    },
  }),
  produtosImgsController.create,
);

produtosImgsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      id_produtos: Joi.number().required(),
      skus: Joi.string().required(),
      codigo: Joi.string().allow(''),
      codigo_barras: Joi.string().allow(''),
      referencia: Joi.string().allow(''),
      estoque: Joi.number().required(),
      preco_custo: Joi.number().required(),
      preco_venda: Joi.number().required(),
      preco_promo: Joi.number().required(),
      altura: Joi.number().default('5'),
      largura: Joi.number().default('11'),
      comprimento: Joi.number().default('16'),
      peso: Joi.number().default('0.300'),
      excluir: Joi.boolean().default(false),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosImgsController.update,
);

produtosImgsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosImgsController.delete,
);

export default produtosImgsRouter;
