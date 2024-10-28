import prisma from "@/app/lib/prisma";

export async function POST(req: Request) {
    try {
        const { name, image, price, category, publicId } = await req.json(); 

        const newPost = await prisma.post.create({
            data: {
                name,
                image,
                price: Number(price),
                category,
                imagePublicId: publicId, 
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