-- DropForeignKey
ALTER TABLE `user_roles` DROP FOREIGN KEY `user_roles_ibfk_2`;

-- DropIndex
DROP INDEX `user_roles_role_id_key` ON `user_roles`;

-- AddForeignKey
ALTER TABLE `user_roles` ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
