-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "manual" BOOLEAN NOT NULL DEFAULT true,
    "progress" TEXT,
    "joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "test" TIMESTAMP(3),

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
