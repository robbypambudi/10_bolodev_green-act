<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Campaigns;
use App\Models\CampaignTask;
use App\Models\UserCampaigns;
use Illuminate\Auth\Events\Validated;

class CampaignController extends Controller
{
    
    public function index()
    {
        // Get 10 Latest Campaigns
        $campaigns = Campaigns::all();

        return response()->json([
            'code' => 200,
            'message' => 'Success get campaigns',
            'data' => [
                'campaigns' => $campaigns
            ]
        ]);
    }

    public function detail($id)
    {
        // Get Campaigns by ID
        $campaign = Campaigns::find($id);

        // if not logged in, return false
        if (!auth()->user()) {
            return response()->json([
                'code' => 200,
                'message' => 'Success get campaign',
                'data' => [
                    'campaign' => $campaign,
                ]
            ]);
        }

        $campaignUser = UserCampaigns::where('user_id', auth()->user()->id)
            ->where('campaign_id', $id)
            ->first();

        $task = CampaignTask::where('campaign_id', $id)->get();

        return response()->json([
            'code' => 200,
            'message' => 'Success get campaign',
            'data' => [
                'campaign' => $campaign,
                'is_registered' => $campaignUser ? true : false,
                'task' => $task
            ]
        ]);
    }

    public function register($id)
    {
        // Check if user already registered
        $campaignUser = UserCampaigns::where('user_id', auth()->user()->id)
            ->where('campaign_id', $id)
            ->first();

        if ($campaignUser) {
            return response()->json([
                'code' => 400,
                'message' => 'You already registered this campaign',
            ], 400);
        }

        $campaignUser = new UserCampaigns;
        $campaignUser->user_id = auth()->user()->id;
        $campaignUser->campaign_id = $id;
        $campaignUser->save();

        return response()->json([
            'code' => 200,
            'message' => 'Success register campaign',
            'data' => [
                'campaign' => $campaignUser
            ]
        ]);
    }

    public function task($campaign_task_id){

    }
}
