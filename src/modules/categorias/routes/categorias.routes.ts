import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import CategoriasController from '../controllers/CategoriasController';

const categoriasRouter = Router();
const categoriasController = new CategoriasController();

categoriasRouter.use(isAuthenticated);

categoriasRouter.get('/', categoriasController.index);

categoriasRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  categoriasController.show,
);

categoriasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      id_categorias: Joi.number().allow(false),
      categoria: Joi.string().required(),
      description: Joi.string().allow(false),
      keywords: Joi.string().allow(false),
      icon: Joi.string().allow(false),
      ordem: Joi.number().allow(0),
      visivel: Joi.boolean().allow(true),
    },
  }),
  categoriasController.create,
);

categoriasRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      id_categorias: Joi.number().allow(false),
      categoria: Joi.string().required(),
      description: Joi.string().allow(false),
      keywords: Joi.string().allow(false),
      icon: Joi.string().allow(false),
      ordem: Joi.number().allow(0),
      visivel: Joi.boolean().allow(true),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  categoriasController.update,
);

categoriasRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  categoriasController.delete,
);

export default categoriasRouter;
