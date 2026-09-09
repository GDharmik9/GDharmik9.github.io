'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/components/icons';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      aria-pressed={mounted ? isDark : undefined}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm backdrop-blur transition hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-white"
    >
      {mounted ? (
        isDark ? (
          <SunIcon className="h-4 w-4" />
        ) : (
          <MoonIcon className="h-4 w-4" />
        )
      ) : (
        <span className="block h-4 w-4" />
      )}
    </button>
  );
}
