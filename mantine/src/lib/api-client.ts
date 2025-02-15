import ky from 'ky';

export type ApiMethod = 'get' | 'post' | 'put' | 'delete';

export interface ApiResponse<T> {
  error: boolean;
  errorMessage?: string;
  json?: T;
}

export const api = ky.create({
  prefixUrl: 'https://api.open-meteo.com/v1',
  retry: {
    limit: 0, // disable auto retries
  },
});

export async function callApi<T>(url: string, method: ApiMethod = 'get', data?: object): Promise<ApiResponse<T>> {
  const defaultErrorMessage = 'An unknown error occurred';

  try {
    const response = await api[method](url, { json: data });
    const json: T = await response.json();

    return {
      error: false,
      json,
    };
  } catch (ex) {
    if (ex instanceof Error) {
      return {
        error: true,
        errorMessage: ex.message || defaultErrorMessage,
      };
    }

    throw new Error(defaultErrorMessage);
  }
}
