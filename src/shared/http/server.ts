import 'dotenv/config';
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { isCelebrateError } from 'celebrate';
import { pagination } from 'typeorm-pagination';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';
import uploadConfig from '@config/upload';
import apiRequestLimiter from '@shared/http/middlewares/rateLimiter';

const app = express();

app.use(cors());
app.use(express.json());

app.use(apiRequestLimiter);

app.use(pagination);

app.use(express.static('public'));

app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

// app.use(errors());

// SETUP EJS
app.set('view engine', 'ejs');

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    console.log('ERROR ALL: %O', error);

    if (isCelebrateError(error)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const validation: any = {};
      const errorBodyDetails = error.details.get('body')?.details || {};

      Object.entries(errorBodyDetails).forEach(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ([, value]: [string, any | unknown | null]): void => {
          // validation[['field', value.path].join('.')] = value.message;
          validation['field'] = value.path.join('.');
          validation['message'] = value.message;
        },
      );

      return response.status(400).json({
        status: 'Bad Request',
        statusCode: 400,
        message: 'request validation failed',
        validation,
      });
    }

    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        statusCode: error.statusCode,
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

const SERVE_PORT = process.env.PORT || 3333;
app.listen(SERVE_PORT, () => {
  console.log(`Server started on port ${SERVE_PORT}!`);
});
