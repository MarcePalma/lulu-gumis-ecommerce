"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Post } from '@/app/types/types';

export default function PostCards() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/items');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
            {posts.map((post) => (
                <a key={post.id} href="#" className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs mx-auto">
                    <img
                        src={post.image}
                        alt={post.name}
                        className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="relative border border-gray-100 bg-white p-6">
                        <h3 className="mt-4 text-lg font-semibold text-gray-900">{post.name}</h3>
                        <p className="mt-1.5 text-sm text-gray-700">${post.price}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}
