import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppRouter } from './app-router';

import 'sanitize.css';
import 'sanitize.css/assets.css';
import 'sanitize.css/forms.css';

import 'common-template/dist/style.css';
import '@/styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
