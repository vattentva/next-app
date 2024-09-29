'use client';
import { cva, VariantProps } from 'class-variance-authority';
import React, { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { handleRedirect } from '@/shared/actions';

const styles = cva(
  'absolute right-0 mt-2 bg-white border rounded-md shadow-lg',
  {
    variants: {
      open: {
        true: 'block',
        false: 'hidden',
      },
      size: {
        small: 'w-40',
        medium: 'w-52',
        large: 'w-64',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

interface HeaderDropdownProps extends VariantProps<typeof styles> {}

export function HeaderDropdown({ size }: HeaderDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    signOut();
    handleRedirect('/');
  };

  const { data: session } = useSession();
  if (!session) return null;
  const user = session!.user;
  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex items-center p-2 space-x-2 text-white"
        onClick={toggleDropdown}
      >
        <Image
          src={user!.image!}
          className="rounded-full"
          alt='user image'
          width={30}
          height={30}
        />
        <span>{user?.name}</span>
        <div className="w-4 h-4">
          <Image
            src="/icon/arrow.svg"
            alt="arrow"
            width={100}
            height={100}
          />
        </div>
      </button>
      <div className={styles({ open: isOpen, size })}>
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            設定
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            設定
          </a>
          <button
            type="button"
            onClick={handleLogout}
            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            ログアウト
          </button>
        </div>
      </div>
    </div>
  );
};
