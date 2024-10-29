'use client';

interface SubNavbarProps {
    setSelectedCategory: (category: string | undefined) => void;
}

const SubNavbar: React.FC<SubNavbarProps> = ({ setSelectedCategory }) => {
    const categories = [
        { title: 'Amigurumis' },
        { title: 'Flores' },
        { title: 'Accesorios' },
        { title: 'Vestuario' },
    ];

    return (
        <div className="bg-pink-50 shadow-md"> 
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                <span 
                    onClick={() => setSelectedCategory(undefined)} 
                    className="text-pink-600 hover:text-pink-800 transition-colors duration-300 cursor-pointer font-semibold"
                >
                    Todos
                </span>
                {categories.map((category, index) => (
                    <span 
                        key={index} 
                        onClick={() => setSelectedCategory(category.title)}
                        className="text-pink-600 hover:text-pink-800 transition-colors duration-300 cursor-pointer font-semibold"
                    >
                        {category.title}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SubNavbar;