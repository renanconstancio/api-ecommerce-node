import path from 'path';
import multer, { StorageEngine } from 'multer';
import crypto from 'crypto';
import AppError from '@shared/errors/AppError';

interface IUploadConfig {
  driver: 's3' | 'disk';
  tmpFolder: string;
  directory: string;
  multer: {
    storage: StorageEngine;
  };
  config: {
    aws: {
      bucket: string;
    };
  };
}

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads');
const tmpFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  driver: process.env.STORAGE_DRIVER,
  directory: uploadFolder,
  // tmpFolder,
  multer: {
    limits: { fileSize: 2000000 },
    storage: multer.diskStorage({
      destination: uploadFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(16).toString('hex');
        const ext = path.extname(file.originalname);
        const filename = `${fileHash}${ext}`;

        callback(null, filename);
      },
    }),

    fileFilter(request: string, file: { mimetype: string }, cb: any) {
      const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find(
        extAccpt => extAccpt === file.mimetype.toLowerCase(),
      );

      if (isAccepted) {
        cb(null, true);
      } else {
        cb(
          new AppError('Image uploaded is not of type jpg,jpeg or png'),
          false,
        );
      }
    },
  },
  config: {
    aws: {
      bucket: 'api-ecommerce',
    },
  },
} as unknown as IUploadConfig;
