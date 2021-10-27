import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import multer from 'multer';
import uploadConfig from '@config/upload';
import ProdutosImgsController from '../controllers/ProdutosImgsController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const produtosImgsRouter = Router();
const produtosImgsController = new ProdutosImgsController();

const upload = multer(uploadConfig.multer);

produtosImgsRouter.use(isAuthenticated);

produtosImgsRouter.get('/', produtosImgsController.index);

produtosImgsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosImgsController.show,
);

produtosImgsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      id_produtos: Joi.number().allow(0),
      id_produtos_skus: Joi.number().allow(0),
      ordem: Joi.number().allow(0),
      excluir: Joi.boolean().default(false),
    },
  }),
  upload.array('file', 10),
  produtosImgsController.create,
);

produtosImgsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      ordem: Joi.number().allow(0),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosImgsController.update,
);

produtosImgsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  produtosImgsController.delete,
);

export default produtosImgsRouter;
