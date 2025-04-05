import { Hono } from 'hono';

import { getWeatherConditions } from '@/services/weather.service.ts';

export const weatherRouter = new Hono();

weatherRouter.get('/conditions', async context => {
  const { lat, long } = context.req.query();
  const conditions = await getWeatherConditions(lat, long);
  return context.json(conditions);
});
