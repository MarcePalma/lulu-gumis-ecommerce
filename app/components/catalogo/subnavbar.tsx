'use client';

interface SubNavbarProps {
    selectedCategory?: string;
    setSelectedCategory: (category: string | undefined) => void;
}

const SubNavbar: React.FC<SubNavbarProps> = ({ selectedCategory, setSelectedCategory }) => {
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
                    className={`${
                        selectedCategory === undefined 
                            ? 'text-pink-800 font-bold bg-pink-100 border-b-4 border-pink-500' 
                            : 'text-pink-600'
                    } hover:bg-pink-200 hover:border-b-4 hover:border-pink-500 transition-all duration-300 cursor-pointer font-semibold py-2 px-4 rounded-md`}
                >
                    Todos
                </span>
                {categories.map((category, index) => (
                    <span 
                        key={index} 
                        onClick={() => setSelectedCategory(category.title)}
                        className={`${
                            selectedCategory === category.title 
                                ? 'text-pink-800 font-bold bg-pink-100 border-b-4 border-pink-500' 
                                : 'text-pink-600'
                        } hover:bg-pink-200 hover:border-b-4 hover:border-pink-500 transition-all duration-300 cursor-pointer font-semibold py-2 px-4 rounded-md`}
                    >
                        {category.title}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SubNavbar;