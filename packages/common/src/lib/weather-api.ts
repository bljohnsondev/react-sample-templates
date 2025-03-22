import type { CurrentConditions } from '@/types/current-conditions';

import { callApi } from './api-client';

const apiUrl = import.meta.env.VITE_API_URL;

export async function getWeatherConditions(lat: string, long: string): Promise<CurrentConditions | undefined> {
  const url = `${apiUrl}/weather/conditions`;

  const response = await callApi<CurrentConditions | undefined>(`${apiUrl}/weather/conditions`, 'get', {
    lat,
    long,
  });

  return response.json;
}
