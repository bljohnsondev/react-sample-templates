import { callApi } from 'react-common-template';

export interface CurrentConditions {
  time?: Date;
  temperature?: number;
  wind?: number;
}

interface CurrentResponse {
  time?: Date;
  temperature_2m?: number;
  wind_speed_10m?: number;
}

interface WeatherResponse {
  current?: CurrentResponse;
}

export async function getCurrentConditions(lat: number, long: number): Promise<CurrentConditions | undefined> {
  const response = await callApi<WeatherResponse>(
    `forecast?latitude=${lat}&longitude=${long}&temperature_unit=fahrenheit&wind_speed_unit=mph&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`,
    'get'
  );

  if (!response.error && response.json) {
    return response && response.json.current
      ? {
          time: response.json.current.time,
          temperature: response.json.current.temperature_2m,
          wind: response.json.current.wind_speed_10m,
        }
      : undefined;
  }
}
