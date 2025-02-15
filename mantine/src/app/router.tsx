import { RouterProvider } from 'react-router';

import { router } from './route-list';

export function AppRouter() {
  return <RouterProvider router={router} />;
}
