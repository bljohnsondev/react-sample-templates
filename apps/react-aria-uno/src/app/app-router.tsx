import { Overlay } from 'common-template';
import { RouterProvider } from 'react-router';

import { useAppStore } from '@/store/app-store';

import { router } from './route-list';

export function AppRouter() {
  const loading = useAppStore(state => state.loading);

  return (
    <>
      <Overlay open={loading} loading={loading} />
      <RouterProvider router={router} />
    </>
  );
}
