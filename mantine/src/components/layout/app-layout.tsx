import { useState } from 'react';

import { AppContent } from './app-content';
import { AppHeader } from './app-header';
import { MainMenu } from './main-menu';

import { menuItems } from '@/app/menu-items';
import { globalConfig } from '@/config/config-vars';

import styles from './app-layout.module.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <main className={styles.maingrid}>
      <div className={styles.header}>
        <AppHeader
          icon={globalConfig.appIcon}
          title={globalConfig.appTitle}
          menuOpen={showMobileMenu}
          onToggleMobile={toggleMobileMenu}
        />
      </div>
      <div>
        <MainMenu items={menuItems} open={showMobileMenu} />
      </div>
      <div className={styles.content}>
        <AppContent>{children}</AppContent>
      </div>
    </main>
  );
}
