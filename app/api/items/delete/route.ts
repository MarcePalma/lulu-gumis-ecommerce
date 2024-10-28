import { PrismaClient } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';

const prisma = new PrismaClient();

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function DELETE(req: Request) {
    try {
        const { id, imagePublicId } = await req.json();

        console.log("Eliminando publicación con ID:", id);

        if (imagePublicId) {
            const result = await cloudinary.uploader.destroy(imagePublicId);
            console.log("Resultado de eliminación de Cloudinary:", result);
        } else {
            console.log("No se proporcionó imagePublicId. Se omite la eliminación de imagen en Cloudinary.");
        }

        const deletedPost = await prisma.post.delete({
            where: { id: Number(id) },
        });

        console.log("Publicación eliminada de la base de datos:", deletedPost);

        return new Response(JSON.stringify({ message: "Publicación eliminada correctamente" }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error eliminando publicación:", error);
        return new Response(JSON.stringify({ error: "Error eliminando publicación" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}