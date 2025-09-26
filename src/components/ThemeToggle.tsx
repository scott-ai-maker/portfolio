import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid rendering mismatched content during SSR
    return <button aria-label="Toggle theme" className="p-2 rounded bg-gray-200 dark:bg-gray-700" />;
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
