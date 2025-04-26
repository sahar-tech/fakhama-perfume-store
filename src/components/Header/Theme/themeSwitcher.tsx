'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="relative p-0 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      <div className="relative h-3 w-3">
        <Sun className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
      </div>
    </button>
  );
}