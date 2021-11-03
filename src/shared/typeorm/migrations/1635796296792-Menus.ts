import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Menus1635796296792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'menus',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'id_menus',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'id_categorias',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'id_produtos',
            type: 'int',
            isNullable: true,
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
            name: 'FK_ID_MENUS',
            referencedTableName: 'menus',
            referencedColumnNames: ['id'],
            columnNames: ['id_menus'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_ID_MENUSCATEGORIAS',
            referencedTableName: 'categorias',
            referencedColumnNames: ['id'],
            columnNames: ['id_categorias'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_ID_MENUSPRODUTOS',
            referencedTableName: 'produtos',
            referencedColumnNames: ['id'],
            columnNames: ['id_produtos'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('menus');
  }
}
