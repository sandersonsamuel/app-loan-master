-- AlterTable
ALTER TABLE "emprestimo" ALTER COLUMN "data_emprestimo" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
