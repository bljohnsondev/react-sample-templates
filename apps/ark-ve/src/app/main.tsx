import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ToastProvider } from '@/components/toast/toast-provider';

import { AppRouter } from './app-router';

import 'sanitize.css';
import 'sanitize.css/assets.css';
import 'sanitize.css/forms.css';

import '@/styles/index.css';
import '@/styles/ark.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

// replace this <div> with a custom ThemeProvider later that will import both darkTheme and lightTheme
// then conditionally check a store variable for the current theme and apply the corresponding class
createRoot(rootElement).render(
  <StrictMode>
    <ToastProvider>
      <AppRouter />
    </ToastProvider>
  </StrictMode>
);
