"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Cliente = _interopRequireDefault(require("../../../cliente/typeorm/entities/Cliente"));

var _classTransformer = require("class-transformer");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let ClienteEndereco = (_dec = (0, _typeorm.Entity)('clientes_enderecos'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = Reflect.metadata("design:type", Number), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", Number), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0, _typeorm.Column)(), _dec11 = Reflect.metadata("design:type", String), _dec12 = (0, _typeorm.Column)(), _dec13 = Reflect.metadata("design:type", String), _dec14 = (0, _typeorm.Column)(), _dec15 = Reflect.metadata("design:type", String), _dec16 = (0, _typeorm.Column)(), _dec17 = Reflect.metadata("design:type", String), _dec18 = (0, _typeorm.Column)(), _dec19 = Reflect.metadata("design:type", String), _dec20 = (0, _typeorm.Column)(), _dec21 = Reflect.metadata("design:type", String), _dec22 = (0, _typeorm.Column)(), _dec23 = Reflect.metadata("design:type", String), _dec24 = (0, _typeorm.Column)(), _dec25 = Reflect.metadata("design:type", String), _dec26 = (0, _typeorm.Column)(), _dec27 = Reflect.metadata("design:type", Boolean), _dec28 = (0, _typeorm.Column)(), _dec29 = (0, _classTransformer.Exclude)(), _dec30 = Reflect.metadata("design:type", Boolean), _dec31 = (0, _typeorm.CreateDateColumn)(), _dec32 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec33 = (0, _typeorm.UpdateDateColumn)(), _dec34 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec35 = (0, _typeorm.OneToOne)(() => _Cliente.default, cliente => cliente.address), _dec36 = (0, _typeorm.JoinColumn)({
  name: 'id'
}), _dec37 = Reflect.metadata("design:type", typeof _Cliente.default === "undefined" ? Object : _Cliente.default), _dec(_class = (_class2 = class ClienteEndereco {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "id_clientes", _descriptor2, this);

    _initializerDefineProperty(this, "nome_endereco", _descriptor3, this);

    _initializerDefineProperty(this, "nome_recebedor", _descriptor4, this);

    _initializerDefineProperty(this, "endereco", _descriptor5, this);

    _initializerDefineProperty(this, "nr", _descriptor6, this);

    _initializerDefineProperty(this, "bairro", _descriptor7, this);

    _initializerDefineProperty(this, "complemento", _descriptor8, this);

    _initializerDefineProperty(this, "referencia", _descriptor9, this);

    _initializerDefineProperty(this, "cidade", _descriptor10, this);

    _initializerDefineProperty(this, "uf", _descriptor11, this);

    _initializerDefineProperty(this, "cep", _descriptor12, this);

    _initializerDefineProperty(this, "ativo", _descriptor13, this);

    _initializerDefineProperty(this, "excluir", _descriptor14, this);

    _initializerDefineProperty(this, "created_at", _descriptor15, this);

    _initializerDefineProperty(this, "updated_at", _descriptor16, this);

    _initializerDefineProperty(this, "client", _descriptor17, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "id_clientes", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nome_endereco", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nome_recebedor", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "endereco", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nr", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bairro", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "complemento", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "referencia", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "cidade", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "uf", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "cep", [_dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "ativo", [_dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "excluir", [_dec28, _dec29, _dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec31, _dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec33, _dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "client", [_dec35, _dec36, _dec37], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = ClienteEndereco;
exports.default = _default;