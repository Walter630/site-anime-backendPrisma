/*
  Warnings:

  - Added the required column `episodios` to the `Animes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `animes` ADD COLUMN `episodios` INTEGER NOT NULL;
