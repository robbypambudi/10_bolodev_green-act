<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Seeders\VoucherSeeder;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // $this->call(VoucherSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(CampaignSeeder::class);
        $this->call(EventSeeder::class);
        $this->call(CampaignTaskSeeder::class);
    }
}
