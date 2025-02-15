import { type LucideIcon, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

import { IconButton } from '@/components/icon-button';

import styles from './app-header.module.css';

interface AppHeaderProps {
  icon?: LucideIcon;
  title?: string;
  menuOpen?: boolean;
  onToggleMobile?: () => void;
}

type Theme = 'dark' | 'light';

export function AppHeader({ icon: Icon, title, menuOpen, onToggleMobile }: AppHeaderProps) {
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
  }

  return (
    <header className={styles.header}>
      <div className={styles.menubutton}>
        <IconButton icon={menuOpen ? X : Menu} size={24} className={styles.menubutton} onPress={onToggleMobile} />
      </div>
      {Icon ? (
        <div className={styles.icon}>
          <Icon size={20} />
        </div>
      ) : null}
      <h1>{title}</h1>
      <IconButton
        icon={theme === 'dark' ? Sun : Moon}
        size={24}
        fill={true}
        className={styles.themebutton}
        onPress={handleToggleTheme}
      />
    </header>
  );
}
