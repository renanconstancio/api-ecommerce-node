"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _classTransformer = require("class-transformer");

var _ClienteEndereco = _interopRequireDefault(require("../../../cliente_endereco/typeorm/entities/ClienteEndereco"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Cliente = (_dec = (0, _typeorm.Entity)('clientes'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = Reflect.metadata("design:type", Number), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = (0, _classTransformer.Exclude)(), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.Column)(), _dec12 = Reflect.metadata("design:type", String), _dec13 = (0, _typeorm.Column)(), _dec14 = Reflect.metadata("design:type", String), _dec15 = (0, _typeorm.Column)(), _dec16 = Reflect.metadata("design:type", String), _dec17 = (0, _typeorm.Column)(), _dec18 = Reflect.metadata("design:type", String), _dec19 = (0, _typeorm.Column)(), _dec20 = Reflect.metadata("design:type", String), _dec21 = (0, _typeorm.Column)(), _dec22 = Reflect.metadata("design:type", String), _dec23 = (0, _typeorm.Column)(), _dec24 = Reflect.metadata("design:type", String), _dec25 = (0, _typeorm.Column)({
  nullable: true
}), _dec26 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec27 = (0, _typeorm.Column)(), _dec28 = Reflect.metadata("design:type", Boolean), _dec29 = (0, _typeorm.Column)(), _dec30 = (0, _classTransformer.Exclude)(), _dec31 = Reflect.metadata("design:type", Boolean), _dec32 = (0, _typeorm.CreateDateColumn)(), _dec33 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec34 = (0, _typeorm.UpdateDateColumn)(), _dec35 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec36 = (0, _typeorm.OneToMany)(() => _ClienteEndereco.default, address => address.client), _dec37 = (0, _typeorm.JoinColumn)({
  name: 'id_clientes'
}), _dec38 = Reflect.metadata("design:type", Array), _dec(_class = (_class2 = class Cliente {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "nome", _descriptor2, this);

    _initializerDefineProperty(this, "email", _descriptor3, this);

    _initializerDefineProperty(this, "senha", _descriptor4, this);

    _initializerDefineProperty(this, "cnpj", _descriptor5, this);

    _initializerDefineProperty(this, "ie", _descriptor6, this);

    _initializerDefineProperty(this, "cpf", _descriptor7, this);

    _initializerDefineProperty(this, "rg", _descriptor8, this);

    _initializerDefineProperty(this, "telefone", _descriptor9, this);

    _initializerDefineProperty(this, "celular", _descriptor10, this);

    _initializerDefineProperty(this, "operadora", _descriptor11, this);

    _initializerDefineProperty(this, "nascim", _descriptor12, this);

    _initializerDefineProperty(this, "admin", _descriptor13, this);

    _initializerDefineProperty(this, "excluir", _descriptor14, this);

    _initializerDefineProperty(this, "created_at", _descriptor15, this);

    _initializerDefineProperty(this, "updated_at", _descriptor16, this);

    _initializerDefineProperty(this, "address", _descriptor17, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nome", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "email", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "senha", [_dec8, _dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cnpj", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ie", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cpf", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "rg", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "telefone", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "celular", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "operadora", [_dec23, _dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "nascim", [_dec25, _dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "admin", [_dec27, _dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "excluir", [_dec29, _dec30, _dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec32, _dec33], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec34, _dec35], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "address", [_dec36, _dec37, _dec38], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = Cliente;
exports.default = _default;