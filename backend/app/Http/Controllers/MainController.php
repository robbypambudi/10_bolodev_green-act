<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use App\Models\Campaigns;
use App\Models\Events;
use Illuminate\Http\Request;

class MainController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function campaigns()
    {
        // Get 10 Latest Campaigns
        $campaigns = Campaigns::latest()->take(10)->get();

        return response()->json([
            'code' => 200,
            'message' => 'Success get campaigns',
            'data' => [
                'campaigns' => $campaigns
            ]
        ]);
    }

    public function events()
    {
        // Get 10 Latest Events
        $events = Events::latest()->take(10)->get();

        return response()->json([
            'code' => 200,
            'message' => 'Success get events',
            'data' => [
                'events' => $events
            ]
        ]);
    }
}
