import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import { removeToken, setToken } from '@/lib/cookie';
import useMutationToast from '@/hooks/toast/useMutationToast';

import useAuthStore from '@/store/useAuthStore';

import { ApiResponse } from '@/types/api';
import { User } from '@/types/entities/user';

export type LoginBody = {
  username: string;
  password: string;
};
export function useLoginMutation() {
  const storeLogin = useAuthStore.useLogin();

  const result = useMutationToast<void, LoginBody>(
    useMutation((data) => {
      let tempToken: string;

      return api
        .post('/auth/login', data)
        .then((res) => {
          const { access_token } = res.data.data;
          tempToken = access_token;
          setToken(access_token);

          return api.get<ApiResponse<User>>(
            '/auth/me',
          );
        })
        .then((user) => {
          storeLogin({
            ...user.data.data,
            token: tempToken,
          });
        });
    }),
    {
      success: 'Berhasil masuk',
    },
  );

  return result;
}