import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getItemsFromDatabase(category?: string) {
    try {
        const items = await prisma.post.findMany({
            where: category ? { category: category } : {}, 
        });
        return items;
    } catch (error) {
        console.error("Error fetching items from database:", error);
        throw new Error("Could not fetch items");
    } finally {
        await prisma.$disconnect();
    }
}