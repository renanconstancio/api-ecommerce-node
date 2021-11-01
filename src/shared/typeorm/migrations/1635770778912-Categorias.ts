import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Categorias1635770778912 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categorias',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'id_categorias',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'categoria',
            type: 'varchar',
            length: '46',
          },
          {
            name: 'description',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'keywords',
            type: 'varchar',
            length: '155',
            isNullable: true,
          },
          {
            name: 'icon',
            type: 'varchar',
            length: '32',
            isNullable: true,
          },
          {
            name: 'ordem',
            type: 'int',
            default: false,
          },
          {
            name: 'visivel',
            type: 'boolean',
            default: true,
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
        foreignKeys: [
          {
            name: 'FK_ID_CATEGORIAS',
            referencedTableName: 'categorias',
            referencedColumnNames: ['id'],
            columnNames: ['id_categorias'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
        indices: [
          {
            name: 'IDX_CATEGORIAS',
            columnNames: ['visivel', 'ordem', 'excluir'],
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categorias');
  }
}
