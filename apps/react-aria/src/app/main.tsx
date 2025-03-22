import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ToastProvider } from '@/components/toast/toast-provider';

import { AppRouter } from './app-router';

import '@/styles/index.css';
import '@/styles/theme.css';
import '@/styles/react-aria.css';
import '@/styles/toast.css';

import 'react-common-template/dist/style.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <ToastProvider>
      <AppRouter />
    </ToastProvider>
  </StrictMode>
);
