-- DropForeignKey
ALTER TABLE `user_roles` DROP FOREIGN KEY `user_roles_ibfk_1`;

-- DropIndex
DROP INDEX `user_roles_user_id_key` ON `user_roles`;

-- AddForeignKey
ALTER TABLE `user_roles` ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
