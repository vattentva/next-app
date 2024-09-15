import { APP_BASE_URL } from '@/shared/constants/Constants';

export function getUrl(path: string) {
  return (process.env.APP_BASE_URL || APP_BASE_URL) + path;
}

export function getConfig(): {
  method: string,
  headers: { [key: string]: string }
  } {
  return {
    method: 'GET',
    headers: {
      api_token: process.env.APP_API_TOKEN || '',
    },
  };
}

export async function getApi<T>(path: string): Promise<T> {  
  return await fetch(getUrl(path), getConfig())
    .then<T>(response => response.json());
}
