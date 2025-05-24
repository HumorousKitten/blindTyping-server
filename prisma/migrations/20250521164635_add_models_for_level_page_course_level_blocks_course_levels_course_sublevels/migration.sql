-- CreateTable
CREATE TABLE `course_level_blocks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` INTEGER NOT NULL,
    `title` VARCHAR(256) NOT NULL,
    `order` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_levels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level_block_id` INTEGER NOT NULL,
    `title` VARCHAR(256) NOT NULL,
    `type` ENUM('lecture', 'practice') NOT NULL,
    `order` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_sublevels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level_id` INTEGER NOT NULL,
    `content` LONGTEXT NOT NULL,
    `order` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `course_level_blocks` ADD CONSTRAINT `levelBlocks_ifbk_1` FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_levels` ADD CONSTRAINT `courseLevels_ifbk_1` FOREIGN KEY (`level_block_id`) REFERENCES `course_level_blocks`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_sublevels` ADD CONSTRAINT `courseSubLevels_ifbk_1` FOREIGN KEY (`level_id`) REFERENCES `course_levels`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
