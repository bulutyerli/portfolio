import type { Metadata } from 'next';
import { Playfair_Display, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';
import { Suspense } from 'react';

const playfair = Playfair_Display({
  variable: '--font-logo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bulut Yerli Portfolio Website',
  description:
    'Full Stack Web and Mobile Developer. Typescript, Node.js, Express, React, Next.js and React Native',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSerif4.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col max-w-7xl mx-auto w-full font-serif">
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
