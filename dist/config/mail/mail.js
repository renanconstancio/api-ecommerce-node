"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'dcisuporteitapolis@gmail.com',
    pass: 'd96857432e'
  },
  defaults: {
    from: {
      email: 'renanhconstancio@gmail.com',
      name: 'Renan Mail Teste'
    }
  }
};
exports.default = _default;