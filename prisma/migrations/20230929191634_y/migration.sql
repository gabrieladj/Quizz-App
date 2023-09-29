/*
  Warnings:

  - You are about to drop the column `name` on the `UserStudent` table. All the data in the column will be lost.
  - Added the required column `username` to the `UserStudent` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserStudent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_UserStudent" ("id", "password") SELECT "id", "password" FROM "UserStudent";
DROP TABLE "UserStudent";
ALTER TABLE "new_UserStudent" RENAME TO "UserStudent";
CREATE UNIQUE INDEX "UserStudent_username_key" ON "UserStudent"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
