'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-20 shadow-lg">
      <div className="container flex items-center justify-between mx-auto px-6 py-4">
        <Link className="flex items-center" href={'/'}>
          <Image
            className="rounded-full"
            width={80}
            height={80}
            src="/images/LOGO.webp"
            alt="Logo"
          />
          <span className="ml-3 text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors duration-300">
            Amigurumis
          </span>
        </Link>
      </div>
    </footer>
  );
}
