import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EditarPublicaciones from './editarpublicaciones';

export default function Dashboard() {
    const [mostrarEditarPublicaciones, setMostrarEditarPublicaciones] = useState(false);

    const handleEditarClick = () => {
        setMostrarEditarPublicaciones(true);
    };

    return (
        <div className="flex flex-col justify-between border-e bg-#121212 py-24 p-4">
            <div>
                <span className="grid h-10 w-32 place-content-center rounded-lg bg-#121212 text-xs text-gray-600">
                    <Image src={"/images/LOGO.webp"} width={70} height={70} alt='Logo' />
                </span>

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link
                            href="/agregar-catalogo"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-pink-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Publicaciones
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={handleEditarClick}
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-pink-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Editar Publicaciones
                        </button>
                    </li>
                </ul>
            </div>

            {mostrarEditarPublicaciones && (
                <div className="mt-8">
                    <EditarPublicaciones />
                </div>
            )}
        </div>
    );
}
