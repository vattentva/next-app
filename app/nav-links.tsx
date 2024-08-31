'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname() // returns "/dashboard" on /dashboard?foo=bar
  return  (
    <nav>
        <br />
        <Link
          className={`link ${pathname === '/' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
          href='/'
        >
          Home
        </Link>
        <code> | </code>
        <Link
          className={`link ${pathname === '/dashboard' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
          href='/dashboard'
        >
          Dashboard
        </Link>
        <code> | </code>
        <Link
          className={`link ${pathname === '/article' ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
          href='/article'
        >
          Article
        </Link>
      </nav>
  )
}
