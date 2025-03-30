import { type CurrentConditions, callApi } from 'common-template';

const prefixUrl = 'https://api.open-meteo.com/v1';

interface CurrentResponse {
  time?: Date;
  temperature_2m?: number;
  wind_speed_10m?: number;
}

interface WeatherResponse {
  current?: CurrentResponse;
}

export const getWeatherConditions = async (lat: string, long: string): Promise<CurrentConditions | undefined> => {
  const response = await callApi<WeatherResponse>(
    `${prefixUrl}/forecast?latitude=${lat}&longitude=${long}&temperature_unit=fahrenheit&wind_speed_unit=mph&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`,
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
};
