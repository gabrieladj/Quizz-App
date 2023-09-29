/*
  Warnings:

  - You are about to drop the column `email` on the `UserStudent` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserStudent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_UserStudent" ("id", "name", "password") SELECT "id", "name", "password" FROM "UserStudent";
DROP TABLE "UserStudent";
ALTER TABLE "new_UserStudent" RENAME TO "UserStudent";
CREATE UNIQUE INDEX "UserStudent_name_key" ON "UserStudent"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
