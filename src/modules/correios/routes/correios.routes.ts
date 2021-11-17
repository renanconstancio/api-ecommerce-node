import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Joi, celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import CorreioController from '../controllers/CorreioController';

const correiosRouter = Router();
const correiosController = new CorreioController();

correiosRouter.use(isAuthenticated);

correiosRouter.get(
  '/:cep',
  // celebrate({
  //   [Segments.PARAMS]: {
  //     cep: Joi.number().required(),
  //     // cep: Joi.string()
  //     //   .required()
  //     //   .regex(/[0-9]\d{8}/),
  //   },
  // }),
  correiosController.index,
);

export default correiosRouter;
