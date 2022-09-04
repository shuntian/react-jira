import { useAuth } from 'contexts/auth-provider';
import QueryString from 'qs';
import * as auth from '../auth-provider';

const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token?: string;
  data?: object;
}
export const http = (
  endpoint: string,
  { token, headers, data, ...customConfig }: Config = {}
) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
      ...headers,
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${QueryString.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data);
  }
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: 'please login again' });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};
