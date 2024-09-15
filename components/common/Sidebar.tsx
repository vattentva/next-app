'use client';

import { useState } from 'react';
import SidebarContents from './SidebarContents';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <aside 
        className={`bg-gray-100 p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:translate-x-0 sm:w-64 fixed sm:relative z-50 h-full`}
      >
        <nav className="space-y-2">
          <SidebarContents />
        </nav>
      </aside>
      
      <button 
        className={`absolute top-1/2 transform -translate-y-1/2 ${isOpen ? 'left-64' : 'left-0'} sm:hidden z-50`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg 
          className={`w-6 h-6 transition-transform transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
      </button>

      {/* Overlay for SP */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 sm:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
