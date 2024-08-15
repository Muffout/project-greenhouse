-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "isEditing" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("createdAt", "description", "email", "hashedPassword", "id", "isOnline", "name", "role", "updatedAt") SELECT "createdAt", "description", "email", "hashedPassword", "id", coalesce("isOnline", false) AS "isOnline", "name", "role", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
