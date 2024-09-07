import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './sidebar';

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main content */}
          <main className="flex-1 p-24">
            <div className='container'>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
