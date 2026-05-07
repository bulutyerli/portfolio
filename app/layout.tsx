import type { Metadata } from 'next';
import { Playfair_Display, Bitter, DM_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import { ThemeProvider } from 'next-themes';
import Divider from '@/components/ui/Divider';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  variable: '--font-logo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const bitter = Bitter({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const dmMono = DM_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});
export const metadata: Metadata = {
  title: 'Bulut Yerli',
  description: 'Full-Stack Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${bitter.variable} ${dmMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col max-w-7xl mx-auto w-full font-serif">
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
