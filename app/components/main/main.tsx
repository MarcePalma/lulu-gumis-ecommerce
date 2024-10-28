'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramButton from "../navigation/IGButton";
import TestimonialsCarousel from "./testimonioscarousel";

export default function Main() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        '/images/Ejemplo.webp',
        '/images/Ejemplo2.webp',
        '/images/Ejemplo3.webp',
    ];

    return (
        <motion.section
            className='pt-20 py-17 px-4 lg:px-16'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="mx-auto py-6 sm:py-8 lg:py-12">
                <header className="text-center">
                    <h1 className="sparkling-title text-white mb-2 text-3xl sm:text-4xl lg:text-3xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 z-10">
                            Lulu Gumis
                        </span>
                    </h1>
                    <p className="mx-auto mt-2 max-w-md text-black font-semibold text-sm sm:text-base">
                        Luli 🌷| Amigurumis, flores eternas, tejidos a crochet. Shopping & retail
                        《ꕤ》➫ [ Agenda abierta ✨]༄ 📍Concepción, Chile. Tejidos personalizados hechos a mano con mucho lov♡.
                    </p>
                    <Link href={"/catalogo"}>
                        <button className="mt-4 px-5 py-2 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition duration-300 text-sm sm:text-base">
                            Ver Catálogo
                        </button>
                    </Link>
                </header>
                <main className="flex items-center justify-center mt-6">
                    <div className="w-full max-w-3xl">
                        <Link href="/catalogo">
                            <Slider {...settings} className="carousel-container">
                                {images.map((src, index) => (
                                    <div key={index} className="flex justify-center items-center">
                                        <Image
                                            className="rounded-md object-cover mx-auto"
                                            width={600}
                                            height={400}
                                            src={src}
                                            alt={`Amigurumi ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </Link>
                    </div>
                </main>
                <section className="about-us py-8">
                    <div className="container mx-auto">
                        <h2 className="text-center text-3xl font-bold text-gray-800 mb-4">
                            Sobre Lulu Gumis
                        </h2>
                        <p className="text-center text-lg max-w-3xl mx-auto">
                            Lulu Gumis nació de una pasión por el crochet y el deseo de crear personajes encantadores y únicos.
                            Cada pieza es hecha a mano con cuidado y amor, utilizando materiales de alta calidad para garantizar
                            la mejor experiencia. ¡Nos encanta ver cómo nuestros amigurumis encuentran un hogar en manos felices!
                        </p>
                    </div>
                </section>
                <section>
                    <TestimonialsCarousel />
                </section>
            </div>
            <InstagramButton />
            <style jsx>{`
                .sparkling-title {
                    position: relative;
                    display: inline-block;
                    color: #ff69b4; /* Color base rosado */
                    text-shadow: 0 0 10px rgba(255, 105, 180, 0.8), 
                                 0 0 20px rgba(255, 105, 180, 0.6),
                                 0 0 30px rgba(255, 105, 180, 0.4);
                    animation: sparkling 1.5s infinite alternate;
                }

                @keyframes sparkling {
                    0% {
                        text-shadow: 0 0 10px rgba(255, 105, 180, 0.8), 
                                     0 0 20px rgba(255, 105, 180, 0.6),
                                     0 0 30px rgba(255, 105, 180, 0.4);
                    }
                    50% {
                        text-shadow: 0 0 15px rgba(255, 182, 193, 0.8), 
                                     0 0 25px rgba(255, 182, 193, 0.6),
                                     0 0 35px rgba(255, 182, 193, 0.4);
                    }
                    100% {
                        text-shadow: 0 0 10px rgba(255, 105, 180, 0.8), 
                                     0 0 20px rgba(255, 105, 180, 0.6),
                                     0 0 30px rgba(255, 105, 180, 0.4);
                    }
                }
            `}</style>
        </motion.section>
    );
}