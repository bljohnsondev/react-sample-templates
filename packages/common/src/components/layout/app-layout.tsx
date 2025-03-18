import { useState } from 'react';

import type { MenuItem } from '@/types/menu-item';

import { AppHeader } from './app-header';
import { MainMenu } from './main-menu';

import styles from './app-layout.module.css';

interface AppLayoutProps {
  menuItems: MenuItem[];
  headerIcon: React.ReactNode;
  headerTitle: string;
  onThemeChange?: (theme: string) => void;
  children: React.ReactNode;
}

export function AppLayout({ menuItems, headerIcon, headerTitle, onThemeChange, children }: AppLayoutProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleToggleMobile() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <main className={styles.maingrid}>
      <header className={styles.header}>
        <AppHeader
          icon={headerIcon}
          title={headerTitle}
          menuOpen={showMobileMenu}
          onToggleMenu={handleToggleMobile}
          onThemeChange={onThemeChange}
        />
      </header>
      <div>
        <MainMenu items={menuItems} open={showMobileMenu} />
      </div>
      <div className={styles.content}>{children}</div>
    </main>
  );
}
