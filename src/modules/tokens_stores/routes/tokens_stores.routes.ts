import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TokensStoresControllers from '../controllers/TokensStoresControllers';

const tokensRouter = Router();
const tokensController = new TokensStoresControllers();

// usersRouter.use(isAuthenticated);

tokensRouter.get('/', tokensController.index);

// usersRouter.get(
//   '/:id',
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.number().required(),
//     },
//   }),
//   usersController.show,
// );

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
