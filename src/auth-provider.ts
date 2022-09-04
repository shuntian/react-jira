import { http } from 'utils/http';
import { AuthForm, User } from './interfaces/index';

const apiUrl = process.env.REACT_APP_API_URL;
const localStorageKey = '__auth_provider_token__';

export const getToken = () => {
  return window.localStorage.getItem(localStorageKey);
};

export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '');
  return user;
};

export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    if (response.ok) {
      const data = await response.json();
      return handleUserResponse(data);
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const login = (data: AuthForm) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (response: Response) => {
    if (response.ok) {
      const data = await response.json();
      return handleUserResponse(data);
    } else {
      return Promise.reject(await response.json());
    }
  });
};

export const logout = async () => {
  window.localStorage.removeItem(localStorageKey);
};
