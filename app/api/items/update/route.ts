import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(req: Request) {
    try {
        const { id, name, price, category } = await req.json();

        console.log("Editando publicación con ID:", id);

        const updatedPost = await prisma.post.update({
            where: { id: Number(id) },
            data: {
                name,
                price: Number(price),
                category,
            },
        });

        console.log("Publicación actualizada en la base de datos:", updatedPost);

        return new Response(JSON.stringify({ message: "Publicación actualizada correctamente" }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error actualizando publicación:", error);
        return new Response(JSON.stringify({ error: "Error actualizando publicación" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}