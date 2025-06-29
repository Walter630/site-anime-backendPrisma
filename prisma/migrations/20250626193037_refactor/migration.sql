/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `tipos_usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `tipoUsuarioId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - Added the required column `deleted_at` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_tipoUsuarioId_fkey`;

-- DropIndex
DROP INDEX `user_tipoUsuarioId_fkey` ON `user`;

-- AlterTable
ALTER TABLE `tipos_usuarios` DROP COLUMN `deletedAt`,
    ADD COLUMN `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `deletedAt`,
    DROP COLUMN `tipoUsuarioId`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME NOT NULL,
    ADD COLUMN `tipo_usuario_id` VARCHAR(255) NULL,
    ADD COLUMN `updated_at` DATETIME NOT NULL;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_tipo_usuario_id_fkey` FOREIGN KEY (`tipo_usuario_id`) REFERENCES `tipos_usuarios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
