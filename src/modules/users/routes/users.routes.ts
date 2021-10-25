import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersSessionsControllers from '../controllers/UsersSessionsControllers';

const usersRouter = Router();
const usersController = new UsersSessionsControllers();

// usersRouter.use(isAuthenticated);

// usersRouter.get('/', usersController.index);

// usersRouter.get(
//   '/:id',
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.number().required(),
//     },
//   }),
//   usersController.show,
// );

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      connect: Joi.string().allow('teste'),
    },
  }),
  usersController.create,
);

export default usersRouter;
