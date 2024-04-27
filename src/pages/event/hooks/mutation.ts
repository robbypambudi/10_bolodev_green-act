import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import api from '@/lib/axios';
import { removeToken, setToken } from '@/lib/cookie';
import useMutationToast from '@/hooks/toast/useMutationToast';

export type RegisterBody = {
  user_id: string;
  event_id: string;
};
export function useRegisterMutation() {
  const result = useMutationToast<void, RegisterBody>(
    useMutation((data) => {
      return api.post('/auth/register', data);
    }),
    {
      success: 'Berhasil mendaftar',
    },
  );

  return result;
}

type ApplyEventBody = {
  event_id: string;
};

export function useApplyEventToast() {
  const result = useMutationToast<void, ApplyEventBody>(
    useMutation((data) => {
      return api.get(`/events/register/${data.event_id}`);
    }),
    {
      success: 'Berhasil mendaftar',
    },
  );

  return {
    ...result,
  };
}
