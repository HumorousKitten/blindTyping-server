-- AlterTable
ALTER TABLE `course_levels` ADD COLUMN `lang_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `languages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `language` ENUM('russian', 'english') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `course_levels` ADD CONSTRAINT `courseLevels_ifbk_2` FOREIGN KEY (`lang_id`) REFERENCES `languages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
