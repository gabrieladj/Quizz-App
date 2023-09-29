/*
  Warnings:

  - You are about to drop the `Student` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Student_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Student";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UserStudent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Answer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,
    "answer" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Answer_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "UserStudent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Answer" ("answer", "id", "questionId", "studentId") SELECT "answer", "id", "questionId", "studentId" FROM "Answer";
DROP TABLE "Answer";
ALTER TABLE "new_Answer" RENAME TO "Answer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "UserStudent_name_key" ON "UserStudent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserStudent_email_key" ON "UserStudent"("email");
