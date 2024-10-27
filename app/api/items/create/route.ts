import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { name, image, price, categories } = await req.json();

        const newPost = await prisma.post.create({
            data: {
                name,
                image,
                price: Number(price),
                categories: {
                    connect: categories.map((name: string) => ({ name })),
                },
            },
        });
        
        return new Response(JSON.stringify(newPost), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error creating post:", error);
        return new Response(JSON.stringify({ error: "Error creating post" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}