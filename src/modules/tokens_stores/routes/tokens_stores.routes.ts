import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TokensStoresControllers from '../controllers/TokensStoresControllers';

const tokensRouter = Router();
const tokensController = new TokensStoresControllers();

tokensRouter.get('/', tokensController.index);

tokensRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      connect: Joi.string().allow('default'),
    },
  }),
  tokensController.create,
);

export default tokensRouter;
