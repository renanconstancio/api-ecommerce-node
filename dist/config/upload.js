"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _multer = _interopRequireDefault(require("multer"));

var _crypto = _interopRequireDefault(require("crypto"));

var _AppError = _interopRequireDefault(require("../shared/errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const uploadFolder = _path.default.resolve(__dirname, '..', '..', 'uploads');

const tmpFolder = _path.default.resolve(__dirname, '..', '..', 'uploads');

var _default = {
  driver: process.env.STORAGE_DRIVER,
  directory: uploadFolder,
  // tmpFolder,
  multer: {
    limits: {
      fileSize: 2000000
    },
    storage: _multer.default.diskStorage({
      destination: uploadFolder,

      filename(request, file, callback) {
        const fileHash = _crypto.default.randomBytes(16).toString('hex');

        const ext = _path.default.extname(file.originalname);

        const filename = `${fileHash}${ext}`;
        callback(null, filename);
      }

    }),

    fileFilter(request, file, cb) {
      const isAccepted = ['image/png', 'image/jpg', 'image/jpeg'].find(extAccpt => extAccpt === file.mimetype.toLowerCase());

      if (isAccepted) {
        cb(null, true);
      } else {
        cb(new _AppError.default('Image uploaded is not of type jpg,jpeg or png'), false);
      }
    }

  },
  config: {
    aws: {
      bucket: 'api-ecommerce'
    }
  }
};
exports.default = _default;