import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post } from '@/app/types/types';
import Image from 'next/image';

export default function EditarPublicaciones() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [editData, setEditData] = useState<{ id: number; name: string; price: number; category: string } | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/items');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = async (id: number, imagePublicId: string | undefined) => {
        if (!imagePublicId) {
            console.error("No image public ID provided for deletion.");
            return;
        }

        try {
            const response = await axios.delete('/api/items/delete', {
                data: { id, imagePublicId },
            });
            console.log(response.data.message);
            setMessage("Publicación eliminada correctamente.");
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error("Error deleting post:", error);
            setMessage("Error al eliminar la publicación.");
        }
    };

    const startEdit = (post: Post) => {
        setEditData({ id: post.id, name: post.name, price: post.price, category: post.category });
    };

    const handleEdit = async () => {
        if (!editData) return;

        try {
            const response = await axios.put('/api/items/update', editData);
            console.log(response.data.message);
            setMessage("Publicación editada correctamente.");
            setPosts(posts.map(post => post.id === editData.id ? { ...post, ...editData } : post));
            setEditData(null);
        } catch (error) {
            console.error("Error updating post:", error);
            setMessage("Error al editar la publicación.");
        }
    };

    return (
        <div className="p-6 bg-pink-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-center text-pink-700">Editar Publicaciones</h2>
            {message && (
                <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg shadow">
                    {message}
                </div>
            )}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <li key={post.id} className="flex flex-col items-center justify-between p-4 border border-pink-300 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
                        <Image width={600} height={400} src={post.image} alt={post.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="mt-2 text-center">
                            <h3 className="font-bold text-lg text-pink-600">{post.name}</h3>
                            <p className="text-gray-600">Precio: ${post.price}</p>
                            <p className="text-gray-600">Categoría: {post.category}</p>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <button
                                onClick={() => startEdit(post)}
                                className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(post.id, post.imagePublicId)}
                                className="px-4 py-2 text-white bg-red-500 rounded-lg shadow hover:bg-red-600 transition"
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {editData && (
                <div className="mt-8 p-4 border border-pink-300 rounded-lg bg-white shadow-md">
                    <h3 className="text-lg font-bold text-pink-700">Editar Publicación</h3>
                    <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        className="border border-pink-300 p-2 rounded w-full mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Nombre"
                    />
                    <input
                        type="number"
                        value={editData.price}
                        onChange={(e) => setEditData({ ...editData, price: Number(e.target.value) })}
                        className="border border-pink-300 p-2 rounded w-full mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Precio"
                    />
                    <input
                        type="text"
                        value={editData.category}
                        onChange={(e) => setEditData({ ...editData, category: e.target.value })}
                        className="border border-pink-300 p-2 rounded w-full mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Categoría"
                    />
                    <button
                        onClick={handleEdit}
                        className="px-4 py-2 mt-4 text-white bg-green-500 rounded-lg shadow hover:bg-green-600 transition"
                    >
                        Guardar Cambios
                    </button>
                </div>
            )}
        </div>
    );
}
