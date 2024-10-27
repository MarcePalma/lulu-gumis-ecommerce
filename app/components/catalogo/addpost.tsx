"use client";

import { useState } from 'react';
import axios from 'axios';

const AddPost = () => {
    const [image, setImage] = useState<File | null>(null);
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number | string>('');
    const [categories, setCategories] = useState<string[]>([]);
    const [showPopup, setShowPopup] = useState(false); // Estado para el popup

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImage(event.target.files[0]);
        }
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCategories((prevCategories) => 
            prevCategories.includes(value) 
                ? prevCategories.filter(category => category !== value) 
                : [...prevCategories, value]
        );
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!image) return;

        const formData = new FormData();
        formData.append('file', image);
        const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET || "default_preset";
        formData.append('upload_preset', uploadPreset);

        try {
            const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, formData);
            const imageUrl = cloudinaryResponse.data.secure_url;

            await fetch('/api/items/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    image: imageUrl,
                    price: Number(price),
                    categories,
                }),
            });

            setShowPopup(true); // Mostrar el popup

            setImage(null);
            setName('');
            setPrice('');
            setCategories([]);
        } catch (error) {
            console.error("Error al agregar el producto:", error);
        }
    };

    return (
        <form className='max-w-md mx-auto mt-20 p-8 border border-pink-300 rounded-lg shadow-md bg-pink-50' onSubmit={handleSubmit}>
            <h2 className='text-2xl font-semibold text-center text-pink-800 mb-8'>Agregar Producto</h2>
            <div className='mb-6'>
                <label className='block text-sm font-medium text-pink-700'>
                    Nombre del Producto:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='mt-1 block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300'
                    />
                </label>
            </div>
            <div className='mb-6'>
                <label className='block text-sm font-medium text-pink-700'>
                    Precio:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className='mt-1 block w-full p-2 border border-pink-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300'
                    />
                </label>
            </div>
            <div className='mb-6'>
                <label className='block text-sm font-medium text-pink-700'>
                    Imagen:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                        className='mt-1 block w-full border border-pink-300 rounded-md focus:outline-none'
                    />
                </label>
            </div>
            <div className='mb-6'>
                <label className='block text-sm font-medium text-pink-700'>Categoría:</label>
                <div className='flex gap-4 mt-2'>
                    {['Amigurumis', 'Ropa', 'Flores'].map((category) => (
                        <label key={category} className='flex items-center text-sm text-pink-600'>
                            <input
                                type="checkbox"
                                value={category}
                                checked={categories.includes(category)}
                                onChange={handleCategoryChange}
                                className='mr-2 accent-pink-400'
                            />
                            {category}
                        </label>
                    ))}
                </div>
            </div>
            <button type="submit" className='w-full p-3 bg-pink-400 text-white font-semibold rounded-md hover:bg-pink-500 transition'>
                Agregar Post
            </button>

            {/* Popup para confirmar la creación del producto */}
            {showPopup && (
                <div className="fixed top-5 right-5 z-50 m-4 p-4 bg-green-500 text-white rounded-lg shadow-lg transition-opacity duration-300">
                    <span>🚀 Producto agregado correctamente!</span>
                    <button onClick={() => setShowPopup(false)} className="ml-4 text-white font-bold">
                        X
                    </button>
                </div>
            )}
        </form>
    );
};

export default AddPost;
