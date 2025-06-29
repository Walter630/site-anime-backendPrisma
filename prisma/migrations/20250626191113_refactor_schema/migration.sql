/*
  Warnings:

  - The primary key for the `tipos_usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `updatedAt` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `animes` DROP FOREIGN KEY `animes_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_tipoUsuarioId_fkey`;

-- DropIndex
DROP INDEX `animes_userId_fkey` ON `animes`;

-- DropIndex
DROP INDEX `user_tipoUsuarioId_fkey` ON `user`;

-- AlterTable
ALTER TABLE `tipos_usuarios` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` ADD COLUMN `deletedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `tipoUsuarioId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_tipoUsuarioId_fkey` FOREIGN KEY (`tipoUsuarioId`) REFERENCES `tipos_usuarios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animes` ADD CONSTRAINT `animes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
