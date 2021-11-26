"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateBarcode128 = void 0;

var _bwipJs = _interopRequireDefault(require("bwip-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateBarcode128 = async ({
  code,
  height = 18,
  width = null
}) => {
  const opt = {
    bcid: `code128`,
    text: code,
    scale: 4,
    height: height,
    includetext: false
  };

  if (width) {
    opt.width = width;
  }

  const barcode = await _bwipJs.default.toBuffer(opt);
  return Buffer.from(barcode).toString('base64');
};

exports.generateBarcode128 = generateBarcode128;