'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Marker from '@/components/ui/Marker';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return <span className="text-sm font-mono opacity-0">moon</span>;

  return (
    <Marker>
      <button
        className="text-sm font-mono text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out hover:underline cursor-pointer"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? 'sun' : 'moon'}
      </button>
    </Marker>
  );
}
