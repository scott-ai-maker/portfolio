"use client";
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
    <header className="sticky top-0 z-40 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold">Your Name</div>
        <nav className="flex items-center gap-4">
          {sections.map((s) => (
            <a key={s} href={s === 'home' ? '#top' : `#${s}`} className={`px-2 py-1 rounded ${active === s ? 'bg-primary text-white' : 'text-slate-700 dark:text-slate-300'}`}> {s}</a>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="ml-2 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
}
