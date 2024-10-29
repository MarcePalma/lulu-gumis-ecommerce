'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '@/app/types/types';
import Image from 'next/image';
import Loader from '../loader/loader';

interface PostCardsProps {
    category: string | undefined;
}

export default function PostCards({ category }: PostCardsProps) {
    const [posts, setPosts] = useState<Post[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        console.log("Category changed:", category);

        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/items', {
                    params: { category: category || undefined }
                });
                console.log("Filtered products:", response.data);
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts", error);
            }
        };

        fetchPosts();
    }, [category]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
            {loading ? <Loader /> : (
                <>
                    {posts && posts.length > 0 ? (
                        posts.map((post) => (
                            <motion.a
                                key={post.id}
                                href="#"
                                className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs mx-auto"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: post.id * 0.1 }}
                            >
                                <Image
                                    width={600}
                                    height={400}
                                    src={post.image}
                                    alt={post.name}
                                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="relative border border-gray-100 bg-white p-6">
                                    <h3 className="mt-4 text-lg font-semibold text-gray-900">{post.name}</h3>
                                    <p className="mt-1.5 text-sm text-gray-700">${post.price}CLP</p>
                                </div>
                            </motion.a>
                        ))
                    ) : (
                        <p>No hay productos en esta categoría.</p>
                    )}
                </>
            )}
        </div>
    );
}