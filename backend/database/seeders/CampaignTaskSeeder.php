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
                'title' => 'Campaign 1',
                'description' => 'Description 1',
                'image' => 'image1.jpg',

                'campaign_id' => '1',
                
            ],
            [
                'title' => 'Campaign 2',
                'description' => 'Description 2',
                'image' => 'image2.jpg',

                'campaign_id' => '1',
            ],
            [
                'title' => 'Campaign 3',
                'description' => 'Description 3',
                'image' => 'image3.jpg',

                'campaign_id' => '1',
                
            ],
        ];

        foreach ($campaigns as $campaign) {
            \App\Models\CampaignTask::create($campaign);
        }
    }
}
