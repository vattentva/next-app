'use client';

import { APP_NAME } from '@/shared/constants/Constants';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 {APP_NAME} All rights reserved.
    </footer>
  );
}
  