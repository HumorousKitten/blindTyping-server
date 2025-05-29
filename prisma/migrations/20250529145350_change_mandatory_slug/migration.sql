/*
  Warnings:

  - Made the column `fromWhom` on table `courses` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `courses` MODIFY `slug` VARCHAR(191) NULL,
    MODIFY `fromWhom` ENUM('admin', 'user') NOT NULL;
