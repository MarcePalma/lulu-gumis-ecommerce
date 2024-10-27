'use client';

interface SubNavbarProps {
    setSelectedCategory: (category: string | undefined) => void;
}

const SubNavbar: React.FC<SubNavbarProps> = ({ setSelectedCategory }) => {
    const categories = [
        { title: 'Amigurumis' },
        { title: 'Flores' },
        { title: 'Ropa' },
    ];

    return (
        <div className="bg-white shadow-md"> 
            <div className="container mx-auto flex justify-between items-center py-2 px-4">
                <span 
                    onClick={() => setSelectedCategory(undefined)} 
                    className="text-gray-800 hover:text-pink-500 transition-colors duration-300 cursor-pointer"
                >
                    Todos
                </span>
                {categories.map((category, index) => (
                    <span 
                        key={index} 
                        onClick={() => setSelectedCategory(category.title)}
                        className="text-gray-800 hover:text-pink-500 transition-colors duration-300 cursor-pointer"
                    >
                        {category.title}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SubNavbar;