import clsx from 'clsx';
import { LayoutPanelTop, type LucideIcon, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

import { MainMenu } from './main-menu';
import { menuItems } from './menu-items';

interface AppLayoutProps {
  children: React.ReactNode;
}

type Theme = 'dark' | 'light';

export function AppLayout({ children }: AppLayoutProps) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleToggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    const htmlElement = document.documentElement;

    if (newTheme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }

    setTheme(newTheme);
  }

  function handleToggleMobile() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <main className="grid grid-cols-[0fr_1fr] md:grid-cols-[14rem_auto] grid-rows-[auto_1fr] h-screen">
      <header className="col-span-2 sticky top-0 z-10 bg-header-bg text-header-title h-16 flex items-center gap-4 px-4 font-semibold border-b border-b-border">
        <HeaderIcon onClick={handleToggleMobile} icon={showMobileMenu ? X : Menu} className="block md:hidden" />
        <LayoutPanelTop />
        <h1>React Shadcn Template</h1>
        <HeaderIcon onClick={handleToggleTheme} icon={theme === 'dark' ? Sun : Moon} className="ml-auto" />
      </header>
      <div>
        <MainMenu items={menuItems} open={showMobileMenu} />
      </div>
      <div className="p-4 border-l border-l-border">{children}</div>
    </main>
  );
}

interface HeaderIconProps {
  icon: LucideIcon;
  className?: string;
  onClick: () => void;
}

function HeaderIcon({ icon: Icon, className, onClick }: HeaderIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx('text-header-icon cursor-pointer hover:brightness-110', className)}
    >
      <Icon fill="currentColor" />
    </button>
  );
}
