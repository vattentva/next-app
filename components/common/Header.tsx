'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { APP_NAME } from '@/shared/constants/Constants';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">{APP_NAME}</div>
      <button 
        className="sm:hidden block" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
      </button>
      <nav className={`sm:flex sm:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <Button label='Sign Up' href='/register' />
        <Button label='Sign In' href='/login' intent={'secondary'} />
        <a href="#" className="block px-2 py-1">Your Name</a>
      </nav>
    </header>
  );
}
