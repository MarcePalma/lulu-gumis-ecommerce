import React, { useEffect, useState } from 'react';
import { Testimonial } from '@/app/types/types';
import Image from 'next/image';

const fileNames = Array.from({ length: 43 }, (_, i) => (i + 1).toString());

const checkFileExists = async (url: string) => {
    try {
        const response = await fetch(url);
        return response.ok;
    } catch {
        return false;
    }
};

const getFileType = async (fileName: string): Promise<Testimonial> => {
    const videoUrl = `/images/testimonios/${fileName}.mp4`;
    const imageUrl = `/images/testimonios/${fileName}.webp`;

    if (await checkFileExists(videoUrl)) {
        return { id: parseInt(fileName), type: 'video', src: videoUrl };
    } else if (await checkFileExists(imageUrl)) {
        return { id: parseInt(fileName), type: 'image', src: imageUrl };
    }
    return { id: parseInt(fileName), type: 'unknown', src: '' };
};

const TestimonialsCarousel = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const loadTestimonials = async () => {
            const loadedTestimonials = await Promise.all(
                fileNames.map(async (fileName) => await getFileType(fileName))
            );
            setTestimonials(loadedTestimonials.filter(testimonial => testimonial.type !== 'unknown'));
        };

        loadTestimonials();
    }, []);

    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;

    const goToNext = (event: React.MouseEvent) => {
        event.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const goToPrev = (event: React.MouseEvent) => {
        event.preventDefault();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const renderTestimonial = (testimonial: Testimonial) => {
        if (testimonial.type === 'video') {
            return (
                <video
                    src={testimonial.src}
                    className="rounded-lg shadow-lg max-h-96 transition-opacity duration-300"
                    autoPlay
                    loop
                    muted
                />
            );
        }
        return (
            <Image
                width={800}
                height={600}
                src={testimonial.src}
                alt={`Testimonio ${testimonial.id}`}
                className="rounded-lg shadow-lg max-h-96 transition-opacity duration-300"
            />
        );
    };

    return (
        <div className="flex flex-col items-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimonios de Clientes</h2>

            <div className="relative w-full max-w-3xl flex items-center justify-center">
                {testimonials.length > 0 && (
                    <div className="flex justify-between items-center w-full">
                        <div
                            className="flex-1 cursor-pointer opacity-50 transition-opacity duration-300"
                            onClick={goToPrev}
                        >
                            {renderTestimonial(testimonials[prevIndex])}
                        </div>

                        <div className="flex-1">
                            {renderTestimonial(testimonials[currentIndex])}
                        </div>

                        <div
                            className="flex-1 cursor-pointer opacity-50 transition-opacity duration-300"
                            onClick={goToNext}
                        >
                            {renderTestimonial(testimonials[nextIndex])}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex space-x-4 mt-4">
                <button
                    onClick={goToPrev}
                    className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-700 transition duration-300"
                >
                    Anterior
                </button>
                <button
                    onClick={goToNext}
                    className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-700 transition duration-300"
                >
                    Siguiente
                </button>
            </div>

            <style jsx>{`
                video, img {
                    opacity: 0.5; /* Reduce la opacidad para testimonios laterales */
                }
                .flex-1:nth-child(2) {
                    opacity: 1; /* Testimonio principal completamente opaco */
                }
            `}</style>
        </div>
    );
};

export default TestimonialsCarousel;