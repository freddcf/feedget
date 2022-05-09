import { PrismaClient } from "@prisma/client";

// Qualquer operação que o prisma faça no bd aparecerá no log
export const prisma = new PrismaClient({
  log: ['query']
})