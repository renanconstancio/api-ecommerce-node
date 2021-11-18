import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Joi, celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import CorreioController from '../controllers/CorreioController';
import { printEtiquetas } from '../services/prints/etiqueta';

const correiosRouter = Router();
const correiosController = new CorreioController();

// correiosRouter.use(isAuthenticated);

correiosRouter.get(
  '/cep/:cep',
  celebrate({
    [Segments.PARAMS]: {
      // cep: Joi.number().required(),
      cep: Joi.string().required(),
    },
  }),
  correiosController.cep,
);

correiosRouter.post(
  '/etiquetas',
  // celebrate({
  //   [Segments.PARAMS]: {
  //     // cep: Joi.number().required(),
  //     cep: Joi.string().required(),
  //   },
  // }),
  correiosController.etiqueta,
);

correiosRouter.post(
  '/cliente',
  // celebrate({
  //   [Segments.PARAMS]: {
  //     // cep: Joi.number().required(),
  //     cep: Joi.string().required(),
  //   },
  // }),
  correiosController.buscaCliente,
);

correiosRouter.get('/etiqueta-pdf', printEtiquetas);

export default correiosRouter;
