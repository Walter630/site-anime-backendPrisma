/*
  Warnings:

  - You are about to alter the column `deleted_at` on the `tipos_usuario` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `animes_generos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mangas_generos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `animes_generos` DROP FOREIGN KEY `animes_generos_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `animes_generos` DROP FOREIGN KEY `animes_generos_generoId_fkey`;

-- DropForeignKey
ALTER TABLE `mangas_generos` DROP FOREIGN KEY `mangas_generos_generoId_fkey`;

-- DropForeignKey
ALTER TABLE `mangas_generos` DROP FOREIGN KEY `mangas_generos_mangaId_fkey`;

-- AlterTable
ALTER TABLE `tipos_usuario` MODIFY `descricao` VARCHAR(191) NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `deleted_at` DATETIME NULL,
    MODIFY `updated_at` DATETIME NOT NULL;

-- DropTable
DROP TABLE `animes_generos`;

-- DropTable
DROP TABLE `mangas_generos`;

-- CreateTable
CREATE TABLE `_AnimesToGenero` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_AnimesToGenero_AB_unique`(`A`, `B`),
    INDEX `_AnimesToGenero_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GeneroToMangas` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_GeneroToMangas_AB_unique`(`A`, `B`),
    INDEX `_GeneroToMangas_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_AnimesToGenero` ADD CONSTRAINT `_AnimesToGenero_A_fkey` FOREIGN KEY (`A`) REFERENCES `animes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnimesToGenero` ADD CONSTRAINT `_AnimesToGenero_B_fkey` FOREIGN KEY (`B`) REFERENCES `generos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GeneroToMangas` ADD CONSTRAINT `_GeneroToMangas_A_fkey` FOREIGN KEY (`A`) REFERENCES `generos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GeneroToMangas` ADD CONSTRAINT `_GeneroToMangas_B_fkey` FOREIGN KEY (`B`) REFERENCES `mangas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
