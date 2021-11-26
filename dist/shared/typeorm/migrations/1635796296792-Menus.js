"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menus1635796296792 = void 0;

var _typeorm = require("typeorm");

class Menus1635796296792 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'menus',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'id_menus',
        type: 'int',
        isNullable: true
      }, {
        name: 'id_categorias',
        type: 'int',
        isNullable: true
      }, {
        name: 'id_produtos',
        type: 'int',
        isNullable: true
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
        name: 'FK_ID_MENUS',
        referencedTableName: 'menus',
        referencedColumnNames: ['id'],
        columnNames: ['id_menus'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }, {
        name: 'FK_ID_MENUSCATEGORIAS',
        referencedTableName: 'categorias',
        referencedColumnNames: ['id'],
        columnNames: ['id_categorias'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }, {
        name: 'FK_ID_MENUSPRODUTOS',
        referencedTableName: 'produtos',
        referencedColumnNames: ['id'],
        columnNames: ['id_produtos'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }]
    }), true);
  }

  async down(queryRunner) {
    await queryRunner.dropTable('menus');
  }

}

exports.Menus1635796296792 = Menus1635796296792;