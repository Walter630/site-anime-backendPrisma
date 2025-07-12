/*
  Warnings:

  - You are about to alter the column `deleted_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `tipos_usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_tipo_usuario_id_fkey`;

-- DropIndex
DROP INDEX `user_tipo_usuario_id_fkey` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `deleted_at` DATETIME NULL,
    MODIFY `updated_at` DATETIME NOT NULL;

-- DropTable
DROP TABLE `tipos_usuarios`;

-- CreateTable
CREATE TABLE `tipos_usuario` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME NULL,
    `ativado` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `tipos_usuario_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_tipo_usuario_id_fkey` FOREIGN KEY (`tipo_usuario_id`) REFERENCES `tipos_usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
