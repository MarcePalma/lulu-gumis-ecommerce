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

            <div className="py-20 mt-20">
                <PostCards category={selectedCategory} />
            </div>
        </div>
    );
}