/*
  Warnings:

  - You are about to alter the column `nome` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - A unique constraint covering the columns `[title]` on the table `animes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `mangas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `mangas` DROP FOREIGN KEY `mangas_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `user_tipoUsuarioId_fkey`;

-- DropIndex
DROP INDEX `mangas_userId_fkey` ON `mangas`;

-- DropIndex
DROP INDEX `user_tipoUsuarioId_fkey` ON `user`;

-- AlterTable
ALTER TABLE `animes` MODIFY `title` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `mangas` MODIFY `title` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `nome` VARCHAR(100) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `updatedAt` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `animes_title_key` ON `animes`(`title`);

-- CreateIndex
CREATE UNIQUE INDEX `mangas_title_key` ON `mangas`(`title`);

-- CreateIndex
CREATE UNIQUE INDEX `user_nome_key` ON `user`(`nome`);

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_tipoUsuarioId_fkey` FOREIGN KEY (`tipoUsuarioId`) REFERENCES `tipos_usuarios`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `mangas` ADD CONSTRAINT `mangas_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
