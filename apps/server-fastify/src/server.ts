import cors from '@fastify/cors';
import dotenv from 'dotenv';
import Fastify, { type FastifyInstance } from 'fastify';

import { router } from './routes';

dotenv.config();

const server: FastifyInstance = Fastify({});

server.register(cors, {
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : undefined,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
});

server.register(router);

const start = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
