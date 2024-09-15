'use client';

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 p-4">
      <div className="flex flex-col">
        <div className="bg-gray-400">
          {children}
        </div>
      </div>
    </main>
  );
}

  