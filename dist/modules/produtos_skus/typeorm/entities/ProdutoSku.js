"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _classTransformer = require("class-transformer");

var _Produto = _interopRequireDefault(require("../../../produtos/typeorm/entities/Produto"));

var _ProdutoImg = _interopRequireDefault(require("../../../produtos_imgs/typeorm/entities/ProdutoImg"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let ProdutoSku = (_dec = (0, _typeorm.Entity)('produtos_skus'), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = Reflect.metadata("design:type", Number), _dec4 = (0, _typeorm.Column)('int'), _dec5 = Reflect.metadata("design:type", Number), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0, _typeorm.Column)(), _dec11 = Reflect.metadata("design:type", String), _dec12 = (0, _typeorm.Column)(), _dec13 = Reflect.metadata("design:type", String), _dec14 = (0, _typeorm.Column)('int'), _dec15 = Reflect.metadata("design:type", Number), _dec16 = (0, _typeorm.Column)('decimal'), _dec17 = Reflect.metadata("design:type", Number), _dec18 = (0, _typeorm.Column)('decimal'), _dec19 = Reflect.metadata("design:type", Number), _dec20 = (0, _typeorm.Column)('decimal'), _dec21 = Reflect.metadata("design:type", Number), _dec22 = (0, _typeorm.Column)('int'), _dec23 = Reflect.metadata("design:type", Number), _dec24 = (0, _typeorm.Column)('int'), _dec25 = Reflect.metadata("design:type", Number), _dec26 = (0, _typeorm.Column)('int'), _dec27 = Reflect.metadata("design:type", Number), _dec28 = (0, _typeorm.Column)('decimal'), _dec29 = Reflect.metadata("design:type", Number), _dec30 = (0, _typeorm.Column)(), _dec31 = (0, _classTransformer.Exclude)(), _dec32 = Reflect.metadata("design:type", Boolean), _dec33 = (0, _typeorm.CreateDateColumn)(), _dec34 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec35 = (0, _typeorm.UpdateDateColumn)(), _dec36 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec37 = (0, _typeorm.OneToOne)(() => _Produto.default, prod => prod.skus), _dec38 = (0, _typeorm.JoinColumn)({
  name: 'id_produtos'
}), _dec39 = Reflect.metadata("design:type", typeof _Produto.default === "undefined" ? Object : _Produto.default), _dec40 = (0, _typeorm.OneToMany)(() => _ProdutoImg.default, img => img.skus), _dec41 = (0, _typeorm.JoinColumn)({
  name: 'id_produtos_skus'
}), _dec42 = Reflect.metadata("design:type", Array), _dec(_class = (_class2 = class ProdutoSku {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "id_produtos", _descriptor2, this);

    _initializerDefineProperty(this, "skus", _descriptor3, this);

    _initializerDefineProperty(this, "codigo", _descriptor4, this);

    _initializerDefineProperty(this, "codigo_barras", _descriptor5, this);

    _initializerDefineProperty(this, "referencia", _descriptor6, this);

    _initializerDefineProperty(this, "estoque", _descriptor7, this);

    _initializerDefineProperty(this, "preco_custo", _descriptor8, this);

    _initializerDefineProperty(this, "preco_venda", _descriptor9, this);

    _initializerDefineProperty(this, "preco_promo", _descriptor10, this);

    _initializerDefineProperty(this, "altura", _descriptor11, this);

    _initializerDefineProperty(this, "largura", _descriptor12, this);

    _initializerDefineProperty(this, "comprimento", _descriptor13, this);

    _initializerDefineProperty(this, "peso", _descriptor14, this);

    _initializerDefineProperty(this, "excluir", _descriptor15, this);

    _initializerDefineProperty(this, "created_at", _descriptor16, this);

    _initializerDefineProperty(this, "updated_at", _descriptor17, this);

    _initializerDefineProperty(this, "product", _descriptor18, this);

    _initializerDefineProperty(this, "skuimgs", _descriptor19, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "id_produtos", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skus", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "codigo", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "codigo_barras", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "referencia", [_dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "estoque", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "preco_custo", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "preco_venda", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "preco_promo", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "altura", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "largura", [_dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "comprimento", [_dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "peso", [_dec28, _dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "excluir", [_dec30, _dec31, _dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec33, _dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec35, _dec36], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "product", [_dec37, _dec38, _dec39], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "skuimgs", [_dec40, _dec41, _dec42], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
var _default = ProdutoSku;
exports.default = _default;