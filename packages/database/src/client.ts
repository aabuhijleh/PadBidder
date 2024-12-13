import { PrismaClient } from "@prisma/client";

const globalWithPrisma = global as typeof global & {
  prisma: PrismaClient | undefined;
};

export const prisma = globalWithPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalWithPrisma.prisma = prisma;
}

export * from "@prisma/client";
