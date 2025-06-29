/*
  Warnings:

  - You are about to drop the column `adminId` on the `animes` table. All the data in the column will be lost.
  - You are about to drop the column `dataCreateAt` on the `animes` table. All the data in the column will be lost.
  - You are about to drop the column `dataUpdateAt` on the `animes` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `mangas` table. All the data in the column will be lost.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `animesgenero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comentario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `favorito` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `genero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historico` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mangasgenero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notificacao` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `animes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `mangas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_userId_fkey`;

-- DropForeignKey
ALTER TABLE `animes` DROP FOREIGN KEY `Animes_adminId_fkey`;

-- DropForeignKey
ALTER TABLE `animes` DROP FOREIGN KEY `Animes_userId_fkey`;

-- DropForeignKey
ALTER TABLE `animesgenero` DROP FOREIGN KEY `AnimesGenero_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `animesgenero` DROP FOREIGN KEY `AnimesGenero_generoId_fkey`;

-- DropForeignKey
ALTER TABLE `comentario` DROP FOREIGN KEY `Comentario_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `comentario` DROP FOREIGN KEY `Comentario_userId_fkey`;

-- DropForeignKey
ALTER TABLE `favorito` DROP FOREIGN KEY `Favorito_animeId_fkey`;

-- DropForeignKey
ALTER TABLE `favorito` DROP FOREIGN KEY `Favorito_mangaId_fkey`;

-- DropForeignKey
ALTER TABLE `favorito` DROP FOREIGN KEY `Favorito_userId_fkey`;

-- DropForeignKey
ALTER TABLE `historico` DROP FOREIGN KEY `Historico_userId_fkey`;

-- DropForeignKey
ALTER TABLE `mangas` DROP FOREIGN KEY `Mangas_adminId_fkey`;

-- DropForeignKey
ALTER TABLE `mangas` DROP FOREIGN KEY `Mangas_userId_fkey`;

-- DropForeignKey
ALTER TABLE `mangasgenero` DROP FOREIGN KEY `MangasGenero_generoId_fkey`;

-- DropForeignKey
ALTER TABLE `mangasgenero` DROP FOREIGN KEY `MangasGenero_mangaId_fkey`;

-- DropForeignKey
ALTER TABLE `notificacao` DROP FOREIGN KEY `Notificacao_userId_fkey`;

-- DropIndex
DROP INDEX `Animes_adminId_fkey` ON `animes`;

-- DropIndex
DROP INDEX `Mangas_adminId_fkey` ON `mangas`;

-- AlterTable
ALTER TABLE `animes` DROP COLUMN `adminId`,
    DROP COLUMN `dataCreateAt`,
    DROP COLUMN `dataUpdateAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `mangas` DROP COLUMN `adminId`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `ativado` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `tipoUsuarioId` INTEGER NULL;

-- DropTable
DROP TABLE `admin`;

-- DropTable
DROP TABLE `animesgenero`;

-- DropTable
DROP TABLE `comentario`;

-- DropTable
DROP TABLE `favorito`;

-- DropTable
DROP TABLE `genero`;

-- DropTable
DROP TABLE `historico`;

-- DropTable
DROP TABLE `mangasgenero`;

-- DropTable
DROP TABLE `notificacao`;

-- CreateTable
CREATE TABLE `tipos_usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `ativado` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `tipos_usuarios_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historicos` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favoritos` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `animeId` VARCHAR(191) NULL,
    `mangaId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comentarios` (
    `id` VARCHAR(191) NOT NULL,
    `texto` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,
    `animeId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `generos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animes_generos` (
    `animeId` VARCHAR(191) NOT NULL,
    `generoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`animeId`, `generoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mangas_generos` (
    `mangaId` VARCHAR(191) NOT NULL,
    `generoId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`mangaId`, `generoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notificacoes` (
    `id` VARCHAR(191) NOT NULL,
    `mensagem` VARCHAR(191) NOT NULL,
    `lida` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_tipoUsuarioId_fkey` FOREIGN KEY (`tipoUsuarioId`) REFERENCES `tipos_usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mangas` ADD CONSTRAINT `mangas_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animes` ADD CONSTRAINT `animes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historicos` ADD CONSTRAINT `historicos_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favoritos` ADD CONSTRAINT `favoritos_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favoritos` ADD CONSTRAINT `favoritos_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `animes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favoritos` ADD CONSTRAINT `favoritos_mangaId_fkey` FOREIGN KEY (`mangaId`) REFERENCES `mangas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comentarios` ADD CONSTRAINT `comentarios_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comentarios` ADD CONSTRAINT `comentarios_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `animes`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animes_generos` ADD CONSTRAINT `animes_generos_animeId_fkey` FOREIGN KEY (`animeId`) REFERENCES `animes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animes_generos` ADD CONSTRAINT `animes_generos_generoId_fkey` FOREIGN KEY (`generoId`) REFERENCES `generos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mangas_generos` ADD CONSTRAINT `mangas_generos_mangaId_fkey` FOREIGN KEY (`mangaId`) REFERENCES `mangas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mangas_generos` ADD CONSTRAINT `mangas_generos_generoId_fkey` FOREIGN KEY (`generoId`) REFERENCES `generos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notificacoes` ADD CONSTRAINT `notificacoes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RedefineIndex

DROP INDEX `User_email_key` ON `user`;
