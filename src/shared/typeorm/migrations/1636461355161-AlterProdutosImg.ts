import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterProdutosImg1636461355161 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `produtos_imgs` CHANGE `image` `image` VARCHAR(38) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `produtos_imgs` CHANGE `image` `image` VARCHAR(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;',
    );
  }
}
