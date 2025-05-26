/*
  Warnings:

  - Made the column `lang_id` on table `course_levels` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `course_levels` DROP FOREIGN KEY `courseLevels_ifbk_2`;

-- DropIndex
DROP INDEX `courseLevels_ifbk_2` ON `course_levels`;

-- AlterTable
ALTER TABLE `course_levels` MODIFY `lang_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `course_levels` ADD CONSTRAINT `courseLevels_ifbk_2` FOREIGN KEY (`lang_id`) REFERENCES `languages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
