import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import { pagination } from 'typeorm-pagination';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';

import uploadConfig from '@config/upload';
// import rateLimiter from '@shared/http/middlewares/rateLimiter';

const app = express();

app.use(cors());
app.use(express.json());

// app.use(rateLimiter);

app.use(pagination);

app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(errors());

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    // if (isCelebrateError(error)) {
    //   let celebrate_error = null;
    //   error.details.forEach(err => {
    //     celebrate_error.push({
    //       message: err.details[0].message,
    //     });
    //   });

    //   console.log(celebrate_error);

    //   return response.status(400).json({
    //     status: 400,
    //     message: `celebrate_error[0].message`,
    //   });
    // }

    // if (error instanceof CelebrateError) {
    //   const validation = {};
    //   error.details.forEach((err, i) => {
    //     validation[i] = {
    //       suku: err,
    //     };
    //   });
    //   for (const [segment, joiError] of error.details.entries()) {
    //     validation[segment] = {
    //       suku: 'skus',
    //     };
    //     // joiError.details.map(err => {
    //     //   // console.log('segment: ', segment);
    //     //   // return err.message;
    //     // });
    //   }

    // console.log(validation);

    //   return response.status(400).json({
    //     status: 'error',
    //     message: 'error.message',
    //   });
    // }

    // if (error instanceof multer.MulterError) {
    //   return response.status(401).json({
    //     status: 'error',
    //     message: error.message,
    //   });
    // }

    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    // console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server started on port 3333! 🏆');
});
