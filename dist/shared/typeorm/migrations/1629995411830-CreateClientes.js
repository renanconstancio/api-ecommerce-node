"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateClientes1629995411830 = void 0;

var _typeorm = require("typeorm");

class CreateClientes1629995411830 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'clientes',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'nome',
        type: 'varchar',
        length: '60'
      }, {
        name: 'email',
        type: 'varchar',
        length: '72'
      }, {
        name: 'senha',
        type: 'varchar',
        length: '65'
      }, {
        name: 'cnpj',
        type: 'varchar',
        length: '18'
      }, {
        name: 'ie',
        type: 'varchar',
        length: '15'
      }, {
        name: 'cpf',
        type: 'varchar',
        length: '14'
      }, {
        name: 'rg',
        type: 'varchar',
        length: '12'
      }, {
        name: 'telefone',
        type: 'varchar',
        length: '15'
      }, {
        name: 'celular',
        type: 'varchar',
        length: '15'
      }, {
        name: 'operadora',
        type: 'varchar',
        length: '20'
      }, {
        name: 'nascim',
        type: 'date',
        isNullable: true
      }, {
        name: 'admin',
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
      uniques: [{
        name: 'UQ_CLIENTES',
        columnNames: ['email']
      }],
      indices: [{
        name: 'IDX_CLIENTES',
        columnNames: ['email', 'admin', 'excluir']
      }]
    }), true); // await queryRunner.createIndex(
    //   "clientes",
    //   new TableIndex({
    //     name: "UQ_CLIENTES_EMAIL",
    //     columnNames: ["email"],
    //     isUnique: true,
    //   })
    // );
  }

  async down(queryRunner) {
    await queryRunner.dropTable('clientes', true, true, true);
  }

}

exports.CreateClientes1629995411830 = CreateClientes1629995411830;