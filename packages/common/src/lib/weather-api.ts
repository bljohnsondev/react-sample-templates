import type { CurrentConditions } from '@/types/current-conditions';

import { type ApiResponse, callApi } from './api-client';

const apiUrl = import.meta.env.VITE_API_URL;

export async function getWeatherConditions(lat: string, long: string): Promise<ApiResponse<CurrentConditions>> {
  const response = await callApi<CurrentConditions>(`${apiUrl}/weather/conditions`, 'get', {
    lat,
    long,
  });

  return response;
}
