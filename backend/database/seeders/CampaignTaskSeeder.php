<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CampaignTaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $campaigns = [
            [
                'title' => 'Mangrove Planting',
                'description' => 'For this campaign, we will plant mangroves in the surabaya river. The event will take place on 28th April 2024.',
                'image' => 'image1.jpg',
                'campaign_id' => '1',
            ],
            [
                'title' => 'Surabaya Zoo Cleaning',
                'description' => 'For this campaign, we will clean the surabaya zoo. The event will take place on 29th April 2024.',
                'image' => 'image2.jpg',

                'campaign_id' => '1',
            ],
            [
                'title' => 'Beach Cleaning',
                'description' => 'For this campaign, we will clean the beach in surabaya. The event will take place on 30th April 2024.',
                'image' => 'image3.jpg',
                'campaign_id' => '1',

            ],
        ];

        foreach ($campaigns as $campaign) {
            \App\Models\CampaignTask::create($campaign);
        }
    }
}
