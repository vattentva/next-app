'use client';

import { APP_NAME } from '@/shared/constants/Constants';

export function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div>
            <p className="mt-4 text-gray-400">{APP_NAME}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/terms" className="text-gray-600 hover:text-gray-900">利用規約</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-gray-900">プライバシーポリシー</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
  