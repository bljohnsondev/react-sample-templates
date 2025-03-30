import { Overlay } from 'common-template';
import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';

import { useAppStore } from '@/store/app-store';

import { router } from './route-list';

import { darkTheme, lightTheme } from '@/styles/themes.css';

export function AppRouter() {
  const theme = useAppStore(state => state.theme);
  const loading = useAppStore(state => state.loading);

  return (
    <div className={theme === 'dark' ? darkTheme : lightTheme}>
      <Overlay open={loading} loading={loading} />
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </div>
  );
}
