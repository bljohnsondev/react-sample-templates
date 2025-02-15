import { ActionIcon, Burger, useMantineColorScheme } from '@mantine/core';
import { type LucideIcon, Moon, Sun } from 'lucide-react';

import styles from './app-header.module.css';

interface AppHeaderProps {
  icon?: LucideIcon;
  title?: string;
  menuOpen?: boolean;
  onToggleMobile?: () => void;
}

export function AppHeader({ icon: Icon, title, menuOpen, onToggleMobile }: AppHeaderProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <header className={styles.header}>
      <div className={styles.menubutton}>
        <Burger color="blue.5" size="sm" opened={menuOpen === true} onClick={onToggleMobile} aria-label="Toggle Menu" />
      </div>
      {Icon ? (
        <div className={styles.icon}>
          <Icon size={20} />
        </div>
      ) : null}
      <h1>{title}</h1>
      <ActionIcon
        variant="transparent"
        aria-label="Toggle Scheme"
        color="blue.5"
        className={styles.themebutton}
        onClick={toggleColorScheme}
      >
        {colorScheme === 'light' ? <Moon fill="currentcolor" /> : <Sun fill="currentcolor" />}
      </ActionIcon>
    </header>
  );
}
