/*
  Warnings:

  - You are about to drop the column `listingDate` on the `Listings` table. All the data in the column will be lost.
  - Added the required column `description` to the `Listings` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Listings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "listingName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Listings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Listings" ("id", "listingName", "price", "updatedAt", "userId") SELECT "id", "listingName", "price", "updatedAt", "userId" FROM "Listings";
DROP TABLE "Listings";
ALTER TABLE "new_Listings" RENAME TO "Listings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
