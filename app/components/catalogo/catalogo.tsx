'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PostCards from './post';
import SubNavbar from './subnavbar';

function CatalogoContent() {
    const searchParams = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        setSelectedCategory(categoryParam || undefined);
    }, [searchParams]);

    return (
        <div>
            <div className="py-20 mt-10">
                <SubNavbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
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

export default function Catalogo() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <CatalogoContent />
        </Suspense>
    );
}
