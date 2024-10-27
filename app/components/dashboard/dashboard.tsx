import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Dashboard() {


    return (
        <div className="flex flex-col justify-between border-e bg-#121212 py-24 p-4">
            <div>
                <span className="grid h-10 w-32 place-content-center rounded-lg bg-#121212 text-xs text-gray-600">
                    <Image src={"/images/logo.webp"} width={70} height={70} alt='Logo' />
                </span>

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link
                            href="/agregar-publicaciones"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-pink-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Publicaciones
                        </Link>
                    </li>
                    <li>
                        <button
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-pink-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Editar Publicaciones
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    );
}
