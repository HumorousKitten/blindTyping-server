/*
  Warnings:

  - The primary key for the `levels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `levels` table. All the data in the column will be lost.
  - Made the column `level` on table `levels` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sublevel` on table `levels` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `levels` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    MODIFY `level` INTEGER NOT NULL,
    MODIFY `sublevel` INTEGER NOT NULL,
    ADD PRIMARY KEY (`level`, `sublevel`);
