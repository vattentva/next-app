'use client';

import { Button } from '@/components/ui/Button';
import { BellAlertIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Home</h1>
          <Button intent={'primary'} label='Create' />
        </div>

        <div className="flex gap-2 mb-8">
          <button className="bg-gray-800 text-green-400 px-6 py-2 rounded-full">
            All
          </button>
          <button className="text-gray-400 hover:text-white px-6 py-2">
            Successful
          </button>
          <button className="text-gray-400 hover:text-white px-6 py-2">
            Failed
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-96 text-center">
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <BellAlertIcon className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">
            Not found
          </h2>
          <p className="text-gray-400 mb-6">
            TODO: Create a content
          </p>
          <div className="flex gap-4">
            <Button intent={'secondary'} label='Learn More' />
          </div>
        </div>
      </div>
  );
}