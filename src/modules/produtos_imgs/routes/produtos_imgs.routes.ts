import { Request, Response, Router } from 'express';
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
  upload.single('file'),
  produtosImgsController.create,
);

produtosImgsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      id_produtos: Joi.number().allow(0),
      id_produtos_skus: Joi.number().allow(0),
      image: Joi.string().required(),
      ordem: Joi.number().allow(0),
      excluir: Joi.boolean().default(false),
    },
    [Segments.PARAMS]: {
      id: Joi.number().required(),
    },
  }),
  upload.array('file'),
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

produtosImgsRouter.patch(
  '/images',
  upload.array('file'),
  function (request: Request, response: Response) {
    const { image } = request.body;
    return response.json({ image: image });
  },
);

export default produtosImgsRouter;
