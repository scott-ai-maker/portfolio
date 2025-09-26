"use client";
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const sections = ['home', 'about', 'projects', 'contact'];

export default function SiteHeader() {
  const [active, setActive] = useState('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => (typeof window !== 'undefined' && (localStorage.getItem('theme') as any)) || 'light');

  useEffect(() => {
    const onScroll = () => {
      const offsets = sections.map((id) => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? Infinity }));
      const current = offsets.reduce((prev, cur) => (Math.abs(cur.top) < Math.abs(prev.top) ? cur : prev), offsets[0]);
      setActive(current.id);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur" style={{ backgroundColor: 'rgba(7,16,41,0.6)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold text-text">Your Name</div>
        <nav className="flex items-center gap-4">
          {sections.map((s) => (
            <a
              key={s}
              href={s === 'home' ? '#top' : `#${s}`}
              className={`px-2 py-1 rounded transition-colors duration-300 ${active === s ? 'btn-primary text-black' : 'text-muted hover:text-white hover:bg-gray-700'}`}
            >
              {s}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
