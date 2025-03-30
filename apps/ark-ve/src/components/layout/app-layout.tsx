import { Menu, Moon, Sun } from 'lucide-react';

import { menuItems } from '@/app/menu-items';
import { globalConfig } from '@/config/config-vars';
import { useAppStore } from '@/store/app-store';

import { MainMenu } from './main-menu';

import { content, header, mainGrid, menu, themeButton } from './app-layout.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const theme = useAppStore(state => state.theme);
  const setTheme = useAppStore(state => state.setTheme);

  function handleToggleTheme() {
    console.log('toggling theme');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <main className={mainGrid}>
      <header className={header}>
        <div className={menu}>
          <Menu size={24} />
        </div>
        {globalConfig.appIcon && <div>{globalConfig.appIcon}</div>}
        <div>{globalConfig.appTitle}</div>
        <button type="button" className={themeButton} onClick={handleToggleTheme}>
          {theme === 'dark' ? <Sun size={24} fill="currentColor" /> : <Moon size={24} fill="currentColor" />}
        </button>
      </header>
      <MainMenu items={menuItems} />
      <div className={content}>{children}</div>
    </main>
  );
}
