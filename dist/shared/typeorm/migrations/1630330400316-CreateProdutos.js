"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProdutos1630330400316 = void 0;

var _typeorm = require("typeorm");

class CreateProdutos1630330400316 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'produtos',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'id_marcas',
        type: 'int',
        isNullable: true
      }, {
        name: 'nome',
        type: 'varchar',
        length: '105'
      }, {
        name: 'subnome',
        type: 'varchar',
        length: '105'
      }, {
        name: 'descricao',
        type: 'text',
        isNullable: true
      }, {
        name: 'postagem',
        type: 'varchar',
        length: '55',
        isNullable: true
      }, {
        name: 'ncm',
        type: 'varchar',
        length: '15',
        isNullable: true
      }, {
        name: 'csosn',
        type: 'varchar',
        length: '3',
        isNullable: true
      }, {
        name: 'cfop',
        type: 'varchar',
        length: '4',
        isNullable: true
      }, {
        name: 'cest',
        type: 'varchar',
        length: '20',
        isNullable: true
      }, {
        name: 'cst',
        type: 'varchar',
        length: '2',
        isNullable: true
      }, {
        name: 'unid',
        type: 'varchar',
        length: '3',
        isNullable: true
      }, {
        name: 'visivel',
        type: 'boolean',
        default: false
      }, {
        name: 'ativo',
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
        name: 'FK_ID_MARCA',
        referencedTableName: 'marcas',
        referencedColumnNames: ['id'],
        columnNames: ['id_marcas'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }],
      indices: [{
        name: 'IDX_PRODUTOS',
        columnNames: ['excluir', 'ativo', 'visivel', 'nome']
      }]
    }), true);
  }

  async down(queryRunner) {
    await queryRunner.dropTable('produtos');
  }

}

exports.CreateProdutos1630330400316 = CreateProdutos1630330400316;