<?php

namespace App\Http\Controllers;

use App\Models\Campaigns;

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
}
