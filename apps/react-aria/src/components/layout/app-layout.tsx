import { AppLayout as SharedLayout } from 'common-template';

import { menuItems } from '@/app/menu-items';
import { globalConfig } from '@/config/config-vars';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SharedLayout menuItems={menuItems} headerIcon={globalConfig.appIcon} headerTitle={globalConfig.appTitle}>
      {children}
    </SharedLayout>
  );
}
