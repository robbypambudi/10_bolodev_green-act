import axios, { AxiosError } from 'axios';

import { UninterceptedApiError } from '@/types/api';
import { getToken } from '@/lib/cookie';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

api.interceptors.request.use(function (config) {
  if (config.method === 'put') {
    config.method = 'post';

    if (config.data instanceof FormData) {
      config.data.append('_method', 'PUT');
    } else {
      config.data = {
        ...config.data,
        _method: 'PUT',
      };
    }
  }

  if (config.headers) {
    const token = getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }

  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError<UninterceptedApiError>) => {
    // parse error
    if (error.response?.data.message) {
      return Promise.reject({
        ...error,
        response: {
          ...error.response,
          data: {
            ...error.response.data,
            message:
              typeof error.response.data.message === 'string'
                ? error.response.data.message
                : Object.values(error.response.data.message)[0][0],
          },
        },
      });
    }
    return Promise.reject(error);
  },
);

export default api;
