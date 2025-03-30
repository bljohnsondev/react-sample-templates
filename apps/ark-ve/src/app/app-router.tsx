import { RouterProvider } from 'react-router';

import { Toaster } from '@/components/toast/toast';
import { useAppStore } from '@/store/app-store';

import { router } from './route-list';

import { darkTheme, lightTheme } from '@/styles/themes.css';

export function AppRouter() {
  const theme = useAppStore(state => state.theme);

  return (
    <div className={theme === 'dark' ? darkTheme : lightTheme}>
      {/* <Overlay open={loading} loading={loading} /> */}
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}
