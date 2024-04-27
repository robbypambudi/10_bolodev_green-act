<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserCampaigns;
use App\Models\UserEvents;

class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            'code' => 200,
            'message' => 'Success get user',
            'data' => [
                'user' => auth()->user()
            ]
        ]);
    }

    public function detail($id)
    {
        $user = User::find($id);
        return response()->json([
            'code' => 200,
            'message' => 'Success get user',
            'data' => [
                'user' => auth()->user()
            ]
        ]);
    }

    public function activity()
    {

        $campaigns = UserCampaigns::where('user_id', auth()->user()->id)->with('campaign')->get();
        $events = UserEvents::where('user_id', auth()->user()->id)->with('event')->get();
        return response()->json([
            'code' => 200,
            'message' => 'Success get user activity',
            'data' => [
                'campaigns' => $campaigns,
                'events' => $events
            ]
        ]);
    }

    public function campaigns()
    {
        $campaigns = UserCampaigns::where('user_id', auth()->user()->id)->with('campaign')->get();
        return response()->json([
            'code' => 200,
            'message' => 'Success get user campaigns',
            'data' => $campaigns
        ]);
    }

    public function events()
    {
        $events = UserEvents::where('user_id', auth()->user()->id)->with('event')->get();
        return response()->json([
            'code' => 200,
            'message' => 'Success get user events',
            'data' => $events
        ]);
    }
}
