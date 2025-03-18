import { AppLayout as SharedLayout } from 'react-common-template';

import { menuItems } from '@/app/menu-items';
import { globalConfig } from '@/config/config-vars';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  function handleThemeChange(theme: string) {
    // the shared layout code changes html.data-color-scheme automatically but also need to change mantine's
    document.documentElement.setAttribute('data-mantine-color-scheme', theme);
  }

  return (
    <SharedLayout
      menuItems={menuItems}
      headerIcon={globalConfig.appIcon}
      headerTitle={globalConfig.appTitle}
      onThemeChange={handleThemeChange}
    >
      {children}
    </SharedLayout>
  );
}
