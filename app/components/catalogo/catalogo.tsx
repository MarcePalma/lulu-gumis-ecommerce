"use client"
import { useState } from 'react';
import PostCards from './post';
import SubNavbar from './subnavbar';

export default function Catalogo() {
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

    return (
        <div>
            <div className="py-20 mt-20">
                <SubNavbar setSelectedCategory={setSelectedCategory} />
            </div>

            <div className="text-center">
                <h1 className="sparkling-title text-white mb-2 text-4xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 z-10">
                        Catalogo
                    </span>
                </h1>
                <PostCards category={selectedCategory} />
            </div>
        </div>
    );
}