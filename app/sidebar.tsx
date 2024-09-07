'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname(); // returns "/dashboard" on /dashboard?foo=bar
  const links = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/article', label: 'Article' },
  ];

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav className="flex flex-col">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-semibold ${pathname === link.href ? 'text-sky-600' : 'text-gray-600'}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
