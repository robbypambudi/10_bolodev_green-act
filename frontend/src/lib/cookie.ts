import Cookies from 'universal-cookie';

import { JWT_TOKEN_KEY } from '@/constant/common';

const cookies = new Cookies();

export const getToken = (): string => {
  return cookies.get(JWT_TOKEN_KEY);
};

export const setToken = (token: string) => {
  cookies.set(JWT_TOKEN_KEY, token, {
    path: '/',
  });
};

export const removeToken = () => {
  cookies.remove(JWT_TOKEN_KEY, {
    path: '/',
  });
};