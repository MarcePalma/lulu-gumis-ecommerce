'use client'
import React from 'react';
import Link from 'next/link';
import { NavLinkProps } from '@/app/types/types';

const NavLink: React.FC<NavLinkProps> = ({ href, title, className }) => {
  return (
    <Link href={href} title={title} className={className}>
      {title}
    </Link>
  );
};

export default NavLink;
