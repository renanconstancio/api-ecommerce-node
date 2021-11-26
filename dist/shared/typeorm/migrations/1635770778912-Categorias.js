"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Categorias1635770778912 = void 0;

var _typeorm = require("typeorm");

class Categorias1635770778912 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'categorias',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'id_categorias',
        type: 'int',
        isNullable: true
      }, {
        name: 'categoria',
        type: 'varchar',
        length: '46'
      }, {
        name: 'description',
        type: 'varchar',
        length: '255',
        isNullable: true
      }, {
        name: 'keywords',
        type: 'varchar',
        length: '155',
        isNullable: true
      }, {
        name: 'icon',
        type: 'varchar',
        length: '32',
        isNullable: true
      }, {
        name: 'ordem',
        type: 'int',
        default: false
      }, {
        name: 'visivel',
        type: 'boolean',
        default: true
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
        name: 'FK_ID_CATEGORIAS',
        referencedTableName: 'categorias',
        referencedColumnNames: ['id'],
        columnNames: ['id_categorias'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }],
      indices: [{
        name: 'IDX_CATEGORIAS',
        columnNames: ['visivel', 'ordem', 'excluir']
      }]
    }), true);
  }

  async down(queryRunner) {
    await queryRunner.dropTable('categorias');
  }

}

exports.Categorias1635770778912 = Categorias1635770778912;