import type { Hono } from 'hono';

import { weatherRouter } from './weather.router.js';

export function registerRouters(app: Hono) {
  app.route('/weather', weatherRouter);
}
