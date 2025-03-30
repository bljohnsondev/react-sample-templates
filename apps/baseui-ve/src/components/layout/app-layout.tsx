import { Menu, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

import { menuItems } from '@/app/menu-items';
import { globalConfig } from '@/config/config-vars';
import { useAppStore } from '@/store/app-store';

import { MainMenu } from './main-menu';

import { content, header, mainGrid, menuButton, themeButton } from './app-layout.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const theme = useAppStore(state => state.theme);
  const setTheme = useAppStore(state => state.setTheme);

  function handleToggleMobile() {
    const newShow = !showMobileMenu;

    // lock that body scroll when the menu is open
    if (newShow) {
      document.body.classList.add('lock-scroll');
    } else {
      document.body.classList.remove('lock-scroll');
    }

    setShowMobileMenu(newShow);
  }

  function handleToggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <main className={mainGrid}>
      <header className={header}>
        <button type="button" className={menuButton} onClick={handleToggleMobile}>
          <Menu size={24} />
        </button>
        {globalConfig.appIcon && <div>{globalConfig.appIcon}</div>}
        <div>{globalConfig.appTitle}</div>
        <button type="button" className={themeButton} onClick={handleToggleTheme}>
          {theme === 'dark' ? <Sun size={24} fill="currentColor" /> : <Moon size={24} fill="currentColor" />}
        </button>
      </header>
      <MainMenu items={menuItems} open={showMobileMenu} />
      <div className={content}>{children}</div>
    </main>
  );
}
