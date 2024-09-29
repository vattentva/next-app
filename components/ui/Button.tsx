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
        small: 'w-4 h-2 text-sm',
        medium: 'w-30 h-10 text-base',
        large: 'w-40 h-20 text-lg',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size:'medium',
    }
  }
);

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  label?: string;
  ev?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({intent, size, ev, label='' }: ButtonProps) {
  return (
    <button
      className={buttonStyles({intent, size})}
      onClick={ev}
    >
      {label}
    </button>
  );
};
