"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Main() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true, // Activar cambio automático
        autoplaySpeed: 3000, // Cambiar cada 3 segundos
    };

    const images = [
        '/images/Ejemplo.webp',
        '/images/Ejemplo2.webp',
        '/images/Ejemplo3.webp',
    ];

    return (
        <section className='py-24 px-4 lg:px-16' style={{ backgroundColor: '#fff' }}>
            <div className="mx-auto py-8 sm:py-12 lg:py-16">
                <header className="text-center">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 z-10">
                            Lulu Gumis
                        </span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-md text-black font-semibold">
                        Luli 🌷| Amigurumis, flores eternas, tejidos a crochet. Shopping & retail
                        《ꕤ》➫ [ Agenda abierta ✨]༄ 📍Concepción, Chile. Tejidos personalizados hechos a mano con mucho lov♡.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition duration-300">
                        Ver Catálogo
                    </button>
                </header>
                <main className="flex items-center justify-center mt-8">
                    <div className="w-full max-w-3xl">
                        <Link href="/catalogo">
                            <Slider {...settings} className="carousel-container">
                                {images.map((src, index) => (
                                    <div key={index} className="flex justify-center items-center">
                                        <Image
                                            className="rounded-md object-cover mx-auto"
                                            width={600}
                                            height={400} // Ajuste para ver si aparecen
                                            src={src}
                                            alt={`Amigurumi ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </Link>
                    </div>
                </main>
            </div>
        </section>
    );
}
