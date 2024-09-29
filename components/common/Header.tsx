'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { APP_NAME } from '@/shared/constants/Constants';
import { HeaderDropdown } from '../ui/HeaderDropdown';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <a href='/' className="text-lg font-bold">{APP_NAME}</a>
      <button 
        className="sm:hidden block" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
      </button>
      <nav className={`sm:flex sm:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <HeaderDropdown size={'small'} />
      </nav>
    </header>
  );
}
