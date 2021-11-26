"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterProdutosImg1636461355161 = void 0;

class AlterProdutosImg1636461355161 {
  async up(queryRunner) {
    await queryRunner.query('ALTER TABLE `produtos_imgs` CHANGE `image` `image` VARCHAR(38) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;');
  }

  async down(queryRunner) {
    await queryRunner.query('ALTER TABLE `produtos_imgs` CHANGE `image` `image` VARCHAR(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL;');
  }

}

exports.AlterProdutosImg1636461355161 = AlterProdutosImg1636461355161;