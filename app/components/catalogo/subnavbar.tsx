'use client';

import Link from 'next/link';

const categories = [
    { path: '/catalogo/amigurumis', title: 'Amigurumis' },
    { path: '/catalogo/flores', title: 'Flores' },
    { path: '/catalogo/ropa', title: 'Ropa' },
];

const SubNavbar = () => {
    return (
        <div className="bg-white shadow-md mt-2"> {/* Ajuste de margen superior para separación */}
            <div className="container mx-auto flex justify-between items-center py-2 px-4"> {/* Ajuste de padding vertical */}
                {categories.map((category, index) => (
                    <Link key={index} href={category.path}>
                        <span className="text-gray-800 hover:text-pink-500 transition-colors duration-300 text-base"> {/* Texto ajustado */}
                            {category.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SubNavbar;
