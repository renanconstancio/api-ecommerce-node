import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProdutoImg1631300986030 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "produtos_imgs",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "id_produtos",
            type: "int",
            isNullable: true,
          },
          {
            name: "id_produtos_skus",
            type: "int",
            isNullable: true,
          },
          {
            name: "image",
            type: "varchar",
            length: "36",
          },
          {
            name: "ordem",
            type: "boolean",
            default: false,
          },
          {
            name: "excluir",
            type: "boolean",
            default: false,
          },
          {
            name: "created_at",
            type: "datetime",
            isNullable: true,
          },
          {
            name: "updated_at",
            type: "datetime",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FK_ID_PRODUTOS_IMGS",
            referencedTableName: "produtos",
            referencedColumnNames: ["id"],
            columnNames: ["id_produtos"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FK_ID_PRODUTOS_SKUS_IMGS",
            referencedTableName: "produtos_skus",
            referencedColumnNames: ["id"],
            columnNames: ["id_produtos_skus"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
        indices: [
          {
            name: "IDX_PRODUTOS_IMGS",
            columnNames: ["ordem", "excluir"],
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produtos_imgs");
  }
}
