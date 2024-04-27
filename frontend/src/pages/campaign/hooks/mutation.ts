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
