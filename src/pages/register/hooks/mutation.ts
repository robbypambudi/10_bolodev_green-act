import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import { removeToken, setToken } from '@/lib/cookie';
import useMutationToast from '@/hooks/toast/useMutationToast';

import useAuthStore from '@/store/useAuthStore';

import { ApiResponse } from '@/types/api';
import { User } from '@/types/entities/user';

export type RegisterBody = {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
};
export function useRegisterMutation() {

  const result = useMutationToast<void, RegisterBody>(
    useMutation((data) => {
      return api
        .post('/auth/register', data);
    }),
    {
      success: 'Berhasil mendaftar',
    },
  );

  return result;
}