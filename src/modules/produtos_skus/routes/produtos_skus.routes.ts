import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ProdutosController from '../controllers/ProdutosSkusController';

const produtosSukusRouter = Router();
const produtosSkusController = new ProdutosController();

produtosSukusRouter.get('/', produtosSkusController.index);

produtosSukusRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosSkusController.show,
);

produtosSukusRouter.post(
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
  produtosSkusController.create,
);

produtosSukusRouter.put(
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
  produtosSkusController.update,
);

produtosSukusRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosSkusController.delete,
);

export default produtosSukusRouter;
