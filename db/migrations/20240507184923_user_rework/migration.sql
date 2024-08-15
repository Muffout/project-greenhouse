/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `profileId` on the `Listings` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Listings` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Profile";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Listings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "listingName" TEXT NOT NULL,
    "listingDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "price" INTEGER NOT NULL,
    CONSTRAINT "Listings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Listings" ("id", "listingDate", "listingName", "price", "updatedAt") SELECT "id", "listingDate", "listingName", "price", "updatedAt" FROM "Listings";
DROP TABLE "Listings";
ALTER TABLE "new_Listings" RENAME TO "Listings";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
