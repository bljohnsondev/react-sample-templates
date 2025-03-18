import { Overlay } from 'react-common-template';
import { RouterProvider } from 'react-router';

import { useToastStore } from '@/store/toast-store';

import { router } from './route-list';

export function AppRouter() {
  const loading = useToastStore(state => state.loading);

  return (
    <>
      <Overlay open={loading} loading={loading} />
      <RouterProvider router={router} />
    </>
  );
}
