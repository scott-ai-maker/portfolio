import './globals.css';
import { ReactNode } from 'react';
import Providers from '../components/Providers';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Your Name — Portfolio',
  description: 'Professional portfolio optimized for employer review.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = 'light'; // Ensure a consistent theme
  return (
    <html
      lang="en"
      className={theme} // Ensure className matches on server and client
      style={{ colorScheme: theme }} // Ensure style matches on server and client
    >
      <body>
        <Providers>
          <SiteHeader />
          <main className="min-h-screen px-6 py-10 max-w-5xl mx-auto">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
