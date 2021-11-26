"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateClientesEnderecos1629995433788 = void 0;

var _typeorm = require("typeorm");

class CreateClientesEnderecos1629995433788 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'clientes_enderecos',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'id_clientes',
        type: 'int',
        isNullable: true
      }, {
        name: 'nome_endereco',
        type: 'varchar',
        length: '25'
      }, {
        name: 'nome_recebedor',
        type: 'varchar',
        length: '30'
      }, {
        name: 'endereco',
        type: 'varchar',
        length: '72'
      }, {
        name: 'nr',
        type: 'varchar',
        length: '8'
      }, {
        name: 'bairro',
        type: 'varchar',
        length: '50'
      }, {
        name: 'complemento',
        type: 'varchar',
        length: '30'
      }, {
        name: 'referencia',
        type: 'varchar',
        length: '60'
      }, {
        name: 'cidade',
        type: 'varchar',
        length: '36'
      }, {
        name: 'uf',
        type: 'varchar',
        length: '2'
      }, {
        name: 'cep',
        type: 'varchar',
        length: '9'
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
        name: 'FK_ID_CLIENTES_ENDERECO',
        referencedTableName: 'clientes',
        referencedColumnNames: ['id'],
        columnNames: ['id_clientes'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }],
      indices: [{
        name: 'IDX_CLIENTES_ENDERECOS',
        columnNames: ['excluir', 'ativo']
      }]
    }), true); // await queryRunner.createIndex(
    //   "clientes_enderecos",
    //   new TableIndex({
    //     name: "IDX_CLIENTES_ENDERECOS",
    //     columnNames: ["excluir", "ativo", "email"],
    //   })
    // );
    // await queryRunner.createForeignKey(
    //   "clientes_enderecos",
    //   new TableForeignKey({
    //     name: "FX_CLIENTES_ENDERECOS",
    //     columnNames: ["id_clientes"],
    //     referencedColumnNames: ["id"],
    //     referencedTableName: "clientes",
    //     onDelete: "CASCADE",
    //     onUpdate: "CASCADE",
    //   })
    // );
  }

  async down(queryRunner) {
    await queryRunner.dropTable('clientes_enderecos', true, true, true);
  }

}

exports.CreateClientesEnderecos1629995433788 = CreateClientesEnderecos1629995433788;