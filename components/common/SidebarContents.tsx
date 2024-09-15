import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarContents() {
  const pathname = usePathname(); // returns "/dashboard" on /dashboard?foo=bar
  const links = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/classification', label: 'Classification' },
  ];
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={'block p-2 bg-gray-500 rounded'}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
