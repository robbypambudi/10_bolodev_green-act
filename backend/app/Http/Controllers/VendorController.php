<?php

namespace App\Http\Controllers;

use App\Models\Campaigns;
use App\Models\CampaignTaskUser;
use App\Models\CampaignTask;

class VendorController extends Controller
{

    public function campaigns()
    {
        $userCampaigns = Campaigns::where('user_id', auth()->user()->id)->get();

        return response()->json([
            'status' => 'success',
            'data' => $userCampaigns
        ]);
    }

    public function campaignTask($id)
    {
        $campaignTaskUser = CampaignTask::where('campaign_id', $id)->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Campaign Task Get Successfully',
            'data' => $campaignTaskUser
        ]);
    }

    public function campaignTaskUser($campaign_task_id)
    {
        $campaignTaskUser = CampaignTaskUser::where('campaign_task_id', $campaign_task_id)->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Campaign Task User Get Successfully',
            'data' => $campaignTaskUser
        ]);
    }
}
