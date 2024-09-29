'use client';

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1">
      <div className="flex justify-center items-center min-h-screen">
        {children}
      </div>
    </main>
  );
}

  