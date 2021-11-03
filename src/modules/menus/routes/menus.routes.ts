import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import MenusController from '../controllers/MenusController';

const menusRouter = Router();
const menusController = new MenusController();

menusRouter.use(isAuthenticated);

menusRouter.get('/', menusController.index);

menusRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      id_categorias: Joi.number().required(),
      id_produtos: Joi.number().required(),
    },
  }),
  menusController.create,
);

menusRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      id_categorias: Joi.number().required(),
      id_produtos: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  menusController.update,
);

menusRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  menusController.delete,
);

export default menusRouter;
