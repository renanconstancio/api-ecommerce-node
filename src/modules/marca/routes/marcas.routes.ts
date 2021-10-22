import { Router } from 'express';
import MarcasController from '../controllers/MarcasController';
import { celebrate, Joi, Segments } from 'celebrate';

const marcasRouter = Router();
const marcasController = new MarcasController();

marcasRouter.get('/', marcasController.index);

marcasRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  marcasController.show,
);

marcasRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      cod: Joi.string().required(),
      marca: Joi.string().required(),
      postagem: Joi.string(),
      visivel: Joi.boolean(),
      // excluir: Joi.boolean(),
    },
  }),
  marcasController.create,
);

marcasRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      cod: Joi.string().required(),
      marca: Joi.string().required(),
      postagem: Joi.string(),
      visivel: Joi.boolean(),
      // excluir: Joi.boolean(),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  marcasController.update,
);

marcasRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  marcasController.delete,
);

export default marcasRouter;
