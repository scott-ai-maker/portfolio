// components/Layout.tsx
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-primary text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-white dark:bg-primary shadow-md">
        {/* NavBar */}
      </header>
      <main className="px-4 md:px-12 py-section">{children}</main>
      <footer className="text-center py-6 text-muted text-sm">
        © {new Date().getFullYear()} Scott — AI Engineer
      </footer>
    </div>
  )
}
