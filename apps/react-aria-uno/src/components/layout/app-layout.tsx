import { useState } from 'react';

import { menuItems } from '@/app/menu-items';

import { Header } from './header';
import { MainMenu } from './main-menu';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleToggleMobile() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <main className="grid grid-cols-[0fr_1fr] md:grid-cols-[14rem_auto] grid-rows-[auto_1fr] h-screen">
      <Header onToggleMenu={handleToggleMobile} />
      <MainMenu items={menuItems} open={showMobileMenu} />
      <section className="col-span-2 md:col-span-1 p-4 md:(border-l border-l-solid border-border dark:border-dark-border)">
        {children}
      </section>
    </main>
  );
}
