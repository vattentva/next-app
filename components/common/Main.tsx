'use client';

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      <div className="flex flex-col">
        <div className="bg-gray-500">
          {children}
        </div>
      </div>
    </main>
  );
}

  