'use client';

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-auto">
      <div className="flex justify-center items-center p-12">
        {children}
      </div>
    </main>
  );
}

  