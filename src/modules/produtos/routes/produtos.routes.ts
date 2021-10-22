import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ProdutosController from '../controllers/ProdutosController';

const produtosRouter = Router();
const produtosController = new ProdutosController();

produtosRouter.get('/', produtosController.index);

produtosRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosController.show,
);

produtosRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      id_marcas: Joi.number().required(),
      nome: Joi.string().required(),
      subnome: Joi.string().allow(''),
      descricao: Joi.string().allow(''),
      postagem: Joi.string().allow(''),
      ncm: Joi.string().required(),
      csosn: Joi.string().required(),
      cfop: Joi.string().required(),
      cest: Joi.string().required(),
      cst: Joi.string().required(),
      unid: Joi.string().required(),
      ativo: Joi.boolean().default(true),
      visivel: Joi.boolean().default(true),
      excluir: Joi.boolean().default(false),
    },
  }),
  produtosController.create,
);

produtosRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      id_marcas: Joi.number().required(),
      nome: Joi.string().required(),
      subnome: Joi.string().allow(''),
      descricao: Joi.string().allow(''),
      postagem: Joi.string().allow(''),
      ncm: Joi.string().required(),
      csosn: Joi.string().required(),
      cfop: Joi.string().required(),
      cest: Joi.string().required(),
      cst: Joi.string().required(),
      unid: Joi.string().required(),
      ativo: Joi.boolean().default(true),
      visivel: Joi.boolean().default(true),
      excluir: Joi.boolean().default(false),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosController.update,
);

produtosRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosController.delete,
);

export default produtosRouter;
