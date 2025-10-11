// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import TopNav from '@/components/TopNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OneLine',
  description: 'One honest line a day.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-neutral-950">
      <body className={`${inter.className} min-h-screen bg-neutral-950 text-zinc-100`}>
        {/* NAV global en todas las páginas */}
        <TopNav />
        {children}
      </body>
    </html>
  );
}