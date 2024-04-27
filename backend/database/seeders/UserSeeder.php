<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = [
            [
                'name' => 'Kebun Binatang Surabaya',
                'email' => 'kbs@greenact.com',
                'type' => 'admin',
                'phone' => '031-1234567',
                'points' => 0,
                'password' => bcrypt('12345678')
            ]
        ];

        foreach ($user as $key => $value) {
            User::create($value);
        }
    }
}
