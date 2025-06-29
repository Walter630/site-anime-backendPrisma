-- DropForeignKey
ALTER TABLE `mangas` DROP FOREIGN KEY `Mangas_adminId_fkey`;

-- DropForeignKey
ALTER TABLE `mangas` DROP FOREIGN KEY `Mangas_userId_fkey`;

-- DropIndex
DROP INDEX `Mangas_adminId_fkey` ON `mangas`;

-- DropIndex
DROP INDEX `Mangas_userId_fkey` ON `mangas`;

-- AlterTable
ALTER TABLE `mangas` MODIFY `userId` VARCHAR(191) NULL,
    MODIFY `adminId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Mangas` ADD CONSTRAINT `Mangas_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mangas` ADD CONSTRAINT `Mangas_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
