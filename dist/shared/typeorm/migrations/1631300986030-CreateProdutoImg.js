"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProdutoImg1631300986030 = void 0;

var _typeorm = require("typeorm");

class CreateProdutoImg1631300986030 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'produtos_imgs',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'id_produtos',
        type: 'int',
        isNullable: true
      }, {
        name: 'id_produtos_skus',
        type: 'int',
        isNullable: true
      }, {
        name: 'image',
        type: 'varchar',
        length: '36'
      }, {
        name: 'ordem',
        type: 'boolean',
        default: false
      }, {
        name: 'excluir',
        type: 'boolean',
        default: false
      }, {
        name: 'created_at',
        type: 'datetime',
        isNullable: true
      }, {
        name: 'updated_at',
        type: 'datetime',
        isNullable: true
      }],
      foreignKeys: [{
        name: 'FK_ID_PRODUTOS_IMGS',
        referencedTableName: 'produtos',
        referencedColumnNames: ['id'],
        columnNames: ['id_produtos'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }, {
        name: 'FK_ID_PRODUTOS_SKUS_IMGS',
        referencedTableName: 'produtos_skus',
        referencedColumnNames: ['id'],
        columnNames: ['id_produtos_skus'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }],
      indices: [{
        name: 'IDX_PRODUTOS_IMGS',
        columnNames: ['ordem', 'excluir']
      }]
    }), true);
  }

  async down(queryRunner) {
    await queryRunner.dropTable('produtos_imgs');
  }

}

exports.CreateProdutoImg1631300986030 = CreateProdutoImg1631300986030;