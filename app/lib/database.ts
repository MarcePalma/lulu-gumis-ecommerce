import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getItemsFromDatabase = async () => {
    try {
        const items = await prisma.post.findMany();
        return items;
    } catch (error) {
        console.error("Error fetching items from database:", error);
        throw new Error("Could not fetch items");
    } finally {
        await prisma.$disconnect();
    }
};