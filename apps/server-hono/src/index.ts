import { serve } from '@hono/node-server';
import dotenv from 'dotenv';
import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { registerRouters } from './routes/index.ts';

dotenv.config();

const app = new Hono();
const port = process.env.PORT ? Number.parseInt(process.env.PORT) : 3000;

app.use(
  '*',
  cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : [],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

registerRouters(app);

serve(
  {
    fetch: app.fetch,
    port,
  },
  info => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
