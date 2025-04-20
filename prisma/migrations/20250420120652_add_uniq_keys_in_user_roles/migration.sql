/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `user_roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[role_id]` on the table `user_roles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `user_roles_user_id_key` ON `user_roles`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `user_roles_role_id_key` ON `user_roles`(`role_id`);
