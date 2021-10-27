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
const tmpFolder = path.resolve(__dirname, '..', '..', 'temp');

export default {
  driver: process.env.STORAGE_DRIVER,
  directory: uploadFolder,
  tmpFolder,
  multer: {
    limits: { fileSize: 2000000 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fileFilter(req: any, file: { mimetype: string }, cb: any) {
      if (!file.mimetype.match(/image.*/)) {
        cb(
          new AppError('Image uploaded is not of type jpg/jpeg/png or gif'),
          false,
        );
      } else {
        cb(null, true);
      }
    },
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(16).toString('hex');
        const ext = path.extname(file.originalname);
        const filename = `${fileHash}${ext}`;

        callback(null, filename);
      },
    }),
  },
  config: {
    aws: {
      bucket: 'api-vendas',
    },
  },
} as unknown as IUploadConfig;
