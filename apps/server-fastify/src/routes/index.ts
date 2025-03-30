import type { FastifyInstance } from 'fastify';
import { weatherRoutes } from './weather.router';

export function router(service: FastifyInstance) {
  service.register(weatherRoutes, { prefix: '/weather' });
}
