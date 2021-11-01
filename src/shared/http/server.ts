import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import { pagination } from 'typeorm-pagination';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import { ValidationError } from 'joi';
import '@shared/typeorm';

import uploadConfig from '@config/upload';
// import rateLimiter from '@shared/http/middlewares/rateLimiter';

interface ValidationErrors {
  [key: string]: string[];
}

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
    if (error instanceof ValidationError) {
      const errors: ValidationErrors = {};

      error.details.forEach(err => {
        errors[err.path] = err.errors;
      });

      return response.status(400).json({ message: 'validation fails', errors });
    }

    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log('Error Server: %O', error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

// app.use('/', (request, response) => {
//   return response.status(200).json('Server started');
// });

app.listen(3333, () => {
  console.log('Server started on port 3333! 🏆');
});
