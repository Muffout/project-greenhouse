/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isEditing` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isOnline` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Made the column `userId` on table `Listings` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "isEditing" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "name" TEXT DEFAULT 'Plantparent'
);
INSERT INTO "new_User" ("email", "hashedPassword", "id", "name", "role") SELECT "email", "hashedPassword", "id", "name", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_Listings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "listingName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Listings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Listings" ("createdAt", "description", "id", "listingName", "price", "updatedAt", "userId") SELECT "createdAt", "description", "id", "listingName", "price", "updatedAt", "userId" FROM "Listings";
DROP TABLE "Listings";
ALTER TABLE "new_Listings" RENAME TO "Listings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_id_key" ON "Profile"("id");
