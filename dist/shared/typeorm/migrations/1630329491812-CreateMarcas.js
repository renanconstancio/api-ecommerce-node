"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMarcas1630329491812 = void 0;

var _typeorm = require("typeorm");

class CreateMarcas1630329491812 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'marcas',
      columns: [{
        name: 'id',
        type: 'int',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      }, {
        name: 'cod',
        type: 'varchar',
        length: '15'
      }, {
        name: 'marca',
        type: 'varchar',
        length: '65'
      }, {
        name: 'postagem',
        type: 'varchar',
        length: '55'
      }, {
        name: 'visivel',
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
      indices: [{
        name: 'IDX_MARCAS',
        columnNames: ['visivel', 'excluir']
      }]
    }), true); // await queryRunner.createIndex(
    //   "marcas",
    //   new TableIndex({
    //     name: "IDX_MARCAS",
    //     columnNames: ["visivel", "excluir"],
    //   })
    // );
  }

  async down(queryRunner) {
    await queryRunner.dropTable('marcas', true, true, true);
  }

}

exports.CreateMarcas1630329491812 = CreateMarcas1630329491812;