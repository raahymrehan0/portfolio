import { Inter } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Animations from './animations';
import Header from '@/components/layout/header';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.raahymrehan.com';

const metaDescription =
  'Raahym Rehan · Software Engineer · Building thoughtful products and AI experiences.';

const ogImagePath = '/images/profile2.jpg';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raahym's portfolio",
    template: "%s | Raahym's portfolio"
  },
  description: metaDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: "Raahym's portfolio",
    title: "Raahym's portfolio",
    description: metaDescription,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: 'Raahym Rehan — Software Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Raahym's portfolio",
    description: metaDescription,
    images: [ogImagePath]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className="overflow-scroll overflow-x-hidden">
        <Animations>
          <main>
            <Header />
            <div className="flex flex-col bg-background text-foreground">
              <main className={`flex-grow ${inter.className}`}>{children}</main>
              <Analytics />
            </div>
            <Toaster />
          </main>
        </Animations>
      </body>
    </html>
  );
}
