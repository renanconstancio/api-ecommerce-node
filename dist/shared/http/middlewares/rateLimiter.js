"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const apiRequestLimiter = (0, _expressRateLimit.default)({
  windowMs: 1 * 60 * 1000,
  // 1 minute
  max: 100,
  // limit each IP to 2 requests per windowMs
  handler: function (req, res) {
    return res.status(429).json({
      error: 'You sent too many requests. Please wait a while then try again'
    });
  }
});
var _default = apiRequestLimiter;
exports.default = _default;