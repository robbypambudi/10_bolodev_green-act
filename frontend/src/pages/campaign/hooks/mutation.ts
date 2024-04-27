import { useMutation } from '@tanstack/react-query';

import api from '@/lib/axios';
import useMutationToast from '@/hooks/toast/useMutationToast';

type CampaignsEventBody = {
  campaign_id: string;
};

export function useCampaignsEventToast() {
  const result = useMutationToast<void, CampaignsEventBody>(
    useMutation((data) => {
      return api.get(`/campaigns/register/${data.campaign_id}`);
    }),
    {
      success: 'Berhasil mendaftar',
    },
  );

  return {
    ...result,
  };
}

type CampaignsTaskBody = {
  campaign_task_id: string;
};

export function useCampaignsTaskToast() {
  const result = useMutationToast<void, CampaignsTaskBody>(
    useMutation((data) => {
      return api.post(`/campaigns/task/${data.campaign_task_id}`);
    }),
    {
      success: 'Berhasil mengupload aksi',
    },
  );

  return {
    ...result,
  };
}
