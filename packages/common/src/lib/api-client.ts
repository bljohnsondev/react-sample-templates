import ky, { type SearchParamsOption } from 'ky';

export type ApiMethod = 'get' | 'post' | 'put' | 'delete';

export interface ApiResponse<T> {
  error: boolean;
  errorMessage?: string;
  json?: T;
}

export const api = ky.create({
  retry: {
    limit: 0, // disable auto retries
  },
});

export async function callApi<T>(url: string, method: ApiMethod = 'get', data?: object): Promise<ApiResponse<T>> {
  const defaultErrorMessage = 'An unknown error occurred';

  try {
    let response = undefined;

    if (method === 'get') {
      const params = data as SearchParamsOption;
      response = await api[method](url, { searchParams: params });
    } else {
      response = await api[method](url, { json: data });
    }

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
