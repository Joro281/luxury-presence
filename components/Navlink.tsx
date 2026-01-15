import Link from 'next/link';
import { ReactNode } from 'react';

interface NavlinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function Navlink({ href, children, className = '' }: NavlinkProps) {
  return (
    <Link 
      href={href} 
      className={`uppercase tracking-wider hover:text-gray-600 transition-colors duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}
