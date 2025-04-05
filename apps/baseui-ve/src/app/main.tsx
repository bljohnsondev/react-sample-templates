import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { defaultTheme } from 've-style';

import { AppRouter } from './app-router';

import 'sanitize.css';
import 'sanitize.css/assets.css';
import 'sanitize.css/forms.css';

// required for vanilla-extract styling to be applied from ve-shared
import 've-style/theme.css';

import '@/styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

document.body.classList.add(defaultTheme);

createRoot(rootElement).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
