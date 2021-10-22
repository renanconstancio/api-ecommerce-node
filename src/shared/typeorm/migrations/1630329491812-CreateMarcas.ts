import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMarcas1630329491812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'marcas',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'cod',
            type: 'varchar',
            length: '15',
          },
          {
            name: 'marca',
            type: 'varchar',
            length: '65',
          },
          {
            name: 'postagem',
            type: 'varchar',
            length: '55',
          },
          {
            name: 'visivel',
            type: 'boolean',
            default: false,
          },
          {
            name: 'excluir',
            type: 'boolean',
            default: false,
          },
          {
            name: 'created_at',
            type: 'datetime',
            isNullable: true,
          },
          {
            name: 'updated_at',
            type: 'datetime',
            isNullable: true,
          },
        ],
        indices: [
          {
            name: 'IDX_MARCAS',
            columnNames: ['visivel', 'excluir'],
          },
        ],
      }),
      true,
    );

    // await queryRunner.createIndex(
    //   "marcas",
    //   new TableIndex({
    //     name: "IDX_MARCAS",
    //     columnNames: ["visivel", "excluir"],
    //   })
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('marcas', true, true, true);
  }
}
