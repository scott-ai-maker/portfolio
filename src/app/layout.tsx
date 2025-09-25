import './globals.css';
import { ReactNode } from 'react';
import Providers from '../components/Providers';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Your Name — Portfolio',
  description: 'Professional portfolio optimized for employer review.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SiteHeader />
          <main className="min-h-screen px-6 py-10 max-w-5xl mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
