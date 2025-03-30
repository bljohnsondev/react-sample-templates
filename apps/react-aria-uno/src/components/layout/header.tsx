import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

import { IconButton } from '@/components/form/icon-button';
import { globalConfig } from '@/config/config-vars';

interface HeaderProps {
  onToggleMenu: () => void;
}

type Theme = 'dark' | 'light';

export function Header({ onToggleMenu }: HeaderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  function handleToggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const element = document.documentElement;

    if (newTheme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }

    setTheme(newTheme);
  }

  return (
    <header className="col-start-1 col-span-2 sticky top-0 z-10 h-16 flex items-center gap-4 px-4 bg-header-bg dark:bg-dark-header-bg text-header-text dark:text-dark-header-text font-semibold border-b border-b-solid border-border dark:border-dark-border">
      <IconButton icon={Menu} onPress={onToggleMenu} className="inline-block md:hidden text-header-icon" />
      {globalConfig.appIcon && <globalConfig.appIcon size={24} />}
      {globalConfig.appTitle}
      <IconButton
        icon={theme === 'dark' ? Sun : Moon}
        size={24}
        fill
        onPress={handleToggleTheme}
        className="ml-auto text-header-icon"
      />
    </header>
  );
}
