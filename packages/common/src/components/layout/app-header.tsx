import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

import { IconButton } from '@/components/icon-button';

import styles from './app-header.module.css';

interface AppHeaderProps {
  icon?: React.ReactNode;
  title?: string;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onThemeChange?: (theme: string) => void;
}

type Theme = 'dark' | 'light';

export function AppHeader({ icon, title, menuOpen = false, onToggleMenu, onThemeChange }: AppHeaderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  function handleToggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const htmlElement = document.documentElement;

    if (newTheme === 'dark') {
      htmlElement.removeAttribute('data-color-scheme');
    } else {
      htmlElement.setAttribute('data-color-scheme', 'light');
    }

    setTheme(newTheme);
    if (onThemeChange) onThemeChange(newTheme);
  }

  return (
    <header className={styles.header}>
      <div className={styles.menuButton}>
        <IconButton
          icon={menuOpen ? <X size={24} /> : <Menu size={24} />}
          ariaLabel="Menu Button"
          onClick={onToggleMenu}
        />
      </div>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h1>{title}</h1>
      <div className={styles.themebutton}>
        <IconButton
          icon={theme === 'dark' ? <Sun size={24} fill="currentColor" /> : <Moon size={24} fill="currentColor" />}
          ariaLabel="Theme Button"
          onClick={handleToggleTheme}
        />
      </div>
    </header>
  );
}
