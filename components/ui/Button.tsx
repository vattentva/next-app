import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonStyles = cva(
  'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline',
  {
    variants: {
      intent: {
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-gray-200 text-gray-900',
        danger: 'bg-red-500 text-white focus:ring-red-500',
      },
      size: {
        small: 'w-4 h-2',
        medium: 'w-30 h-10',
        large: 'w-40 h-20',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size:'medium',
    }
  }
);

export interface ButtonProps
  extends VariantProps<typeof buttonStyles> { label?: string; href?: string; }

export function Button({intent, size, label='', href='/'}: ButtonProps) {
  return (
    <a className={buttonStyles({intent, size})} href={href}>{label}</a>
  );
};
