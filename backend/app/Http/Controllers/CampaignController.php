<?php

namespace App\Http\Controllers;

use App\Models\Campaigns;
use App\Models\CampaignTask;
use App\Models\CampaignTaskUser;
use App\Models\UserCampaigns;

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
        $task = CampaignTask::where('campaign_id', $id)->get();

        // if not logged in, return false
        if (!auth()->user()) {
            return response()->json([
                'code' => 200,
                'message' => 'Success get campaign',
                'data' => [
                    'task' => $task,
                    'campaign' => $campaign,
                ]
            ]);
        }

        $campaignUser = UserCampaigns::where('user_id', auth()->user()->id)
            ->where('campaign_id', $id)
            ->first();

        $userTask = CampaignTaskUser::where('user_id', auth()->user()->id)->with('campaignTask')->get();

        return response()->json([
            'code' => 200,
            'message' => 'Success get campaign',
            'data' => [
                'campaign' => $campaign,
                'is_registered' => $campaignUser ? true : false,
                'task' => $task,
                'user_task' => $userTask
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

    public function task($campaign_task_id)
    {
        $campaignTask = CampaignTask::find($campaign_task_id);

        if (!$campaignTask) {
            return response()->json([
                'code' => 400,
                'message' => 'Task not found',
            ], 400);
        }

        $campaignTaskUser = CampaignTaskUser::where('user_id', auth()->user()->id)
            ->where('campaign_task_id', $campaign_task_id)
            ->first();

        if ($campaignTaskUser) {
            return response()->json([
                'code' => 400,
                'message' => 'You already submitted this task',
            ], 400);
        }

        $campaignTaskUser = new CampaignTaskUser;
        $campaignTaskUser->user_id = auth()->user()->id;
        $campaignTaskUser->campaign_task_id = $campaign_task_id;
        $campaignTaskUser->status = 'pending';
        $campaignTaskUser->save();

        return response()->json([
            'code' => 200,
            'message' => 'Success submit task',
            'data' => [
                'task' => $campaignTaskUser
            ]
        ]);
    }
}
