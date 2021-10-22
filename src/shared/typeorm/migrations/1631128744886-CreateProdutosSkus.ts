import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProdutosSkus1631128744886 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "produtos_skus",
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
            name: "skus",
            type: "varchar",
            length: "15",
          },
          {
            name: "codigo",
            type: "varchar",
            length: "25",
          },
          {
            name: "codigo_barras",
            type: "varchar",
            length: "35",
          },
          {
            name: "referencia",
            type: "varchar",
            length: "25",
          },
          {
            name: "estoque",
            type: "int",
            default: false,
          },
          {
            name: "preco_custo",
            type: "decimal",
            precision: 22,
            scale: 2,
            default: "0.00",
          },
          {
            name: "preco_venda",
            type: "decimal",
            precision: 22,
            scale: 2,
            default: "0.00",
          },
          {
            name: "preco_promo",
            type: "decimal",
            precision: 22,
            scale: 2,
            default: "0.00",
          },
          {
            name: "altura",
            type: "int",
            default: "5",
          },
          {
            name: "largura",
            type: "int",
            default: "11",
          },
          {
            name: "comprimento",
            type: "int",
            default: "16",
          },
          {
            name: "peso",
            type: "double",
            default: "0.300",
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
            name: "FK_ID_PRODUTOS_SKUS",
            referencedTableName: "produtos",
            referencedColumnNames: ["id"],
            columnNames: ["id_produtos"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
        indices: [
          {
            name: "IDX_PRODUTOS_SKUS",
            columnNames: [
              "excluir",
              "estoque",
              "skus",
              "codigo",
              "codigo_barras",
            ],
          },
        ],
      }),
      true
    );

    // await queryRunner.createIndex(
    //   "produtos",
    //   new TableIndex({
    //     name: "IDX_PRODUTOS_SKUS",
    //     columnNames: [
    //       "id_produtos",
    //       "skus",
    //       "codigo",
    //       "codigo_barras",
    //       "estoque",
    //       "excluir",
    //     ],
    //   })
    // );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produtos_skus", true, true, true);
  }
}
