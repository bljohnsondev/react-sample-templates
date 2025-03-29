import type { FastifyInstance } from 'fastify';

import { getWeatherConditions } from '../services/weather.service';

interface WeatherRouteQuerystring {
  lat: string;
  long: string;
}

export async function weatherRoutes(server: FastifyInstance) {
  server.get<{ Querystring: WeatherRouteQuerystring }>('/conditions', async (request, reply) => {
    const { lat, long } = request.query;
    const conditions = await getWeatherConditions(lat, long);
    return reply.send(conditions);
  });
}
