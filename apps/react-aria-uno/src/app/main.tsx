import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';

import { AppRouter } from './app-router';

import '@unocss/reset/tailwind.css';

import 'virtual:uno.css';
import '@/styles/index.css';
import '@/styles/react-aria.css';

import 'react-common-template/dist/style.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <AppRouter />
    <Toaster visibleToasts={5} position="top-center" />
  </StrictMode>
);
