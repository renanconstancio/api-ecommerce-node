"use strict";

require("reflect-metadata");

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _cors = _interopRequireDefault(require("cors"));

var _celebrate = require("celebrate");

var _typeormPagination = require("typeorm-pagination");

var _routes = _interopRequireDefault(require("./routes"));

var _AppError = _interopRequireDefault(require("../errors/AppError"));

require("../typeorm");

var _upload = _interopRequireDefault(require("../../config/upload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import rateLimiter from '@shared/http/middlewares/rateLimiter';
const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json()); // app.use(rateLimiter);

app.use(_typeormPagination.pagination);
app.use(_express.default.static('public'));
app.use('/files', _express.default.static(_upload.default.directory));
app.use(_routes.default); // app.use(errors());
// SETUP EJS

app.set('view engine', 'ejs');
app.use( // eslint-disable-next-line @typescript-eslint/no-unused-vars
(error, request, response, next) => {
  console.log('ERROR ALL: %O', error);

  if ((0, _celebrate.isCelebrateError)(error)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validation = {};
    const errorBodyDetails = error.details.get('body')?.details || {};
    Object.entries(errorBodyDetails).forEach( // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ([, value]) => {
      // validation[['field', value.path].join('.')] = value.message;
      validation['field'] = value.path.join('.');
      validation['message'] = value.message;
    });
    return response.status(400).json({
      status: 'Bad Request',
      statusCode: 400,
      message: 'request validation failed',
      validation
    });
  }

  if (error instanceof _AppError.default) {
    return response.status(error.statusCode).json({
      status: 'error',
      statusCode: error.statusCode,
      message: error.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
}); // app.use('/', (request, response) => {
//   return response.status(200).json('Server started');
// });

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});