'use client';

import Link from 'next/link';

const categories = [
    { path: '/catalogo/amigurumis', title: 'Amigurumis' },
    { path: '/catalogo/flores', title: 'Flores' },
    { path: '/catalogo/ropa', title: 'Ropa' },
];

const SubNavbar = () => {
    return (
        <div className="bg-white shadow-md"> 
            <div className="container mx-auto flex justify-between items-center py-2 px-4">
                {categories.map((category, index) => (
                    <Link key={index} href={category.path}>
                        <span className="text-gray-800 hover:text-pink-500 transition-colors duration-300 text-base">
                            {category.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SubNavbar;
