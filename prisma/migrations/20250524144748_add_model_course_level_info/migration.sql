-- CreateTable
CREATE TABLE `course_level_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level_id` INTEGER NOT NULL,
    `description` LONGTEXT NULL,

    UNIQUE INDEX `course_level_info_level_id_key`(`level_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `course_level_info` ADD CONSTRAINT `course_level_info_ifbk_1` FOREIGN KEY (`level_id`) REFERENCES `course_levels`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
