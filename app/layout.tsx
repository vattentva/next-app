import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { APP_DESCRIPTION, APP_NAME } from '@/shared/constants/Constants';
import { Header } from '@/components/common/Header';
import { Sidebar } from '@/components/common/Sidebar';
import { Main } from '@/components/common/Main';
import { Footer } from '@/components/common/Footer';
import NextAuthProvider from '@/providers/NextAuth';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NextAuthProvider>
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <Main>
              {children}
            </Main>
          </div>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
