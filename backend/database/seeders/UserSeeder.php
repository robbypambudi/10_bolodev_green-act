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
            ],
            [
                'name' => 'Test User 1',
                'email' => 'testuser1@greenact.com',
                'type' => 'user',
                'phone' => '031-1234567',
                'points' => 20,
                'password' => bcrypt('47918313')
            ],
            [
                'name' => 'Test User 2',
                'email' => 'testuser2@greenact.com',
                'type' => 'user',
                'phone' => '0293938913',
                'points' => 10,
                'password' => bcrypt('1313813')
            ],
            [
                'name' => 'Test User 3',
                'email' => 'testuser3@greenact.com',
                'type' => 'user',
                'phone' => '101983193',
                'points' => 50,
                'password' => bcrypt('9284913')
            ],
            [
                'name' => 'Test User 4',
                'email' => 'testuser4@greenact.com',
                'type' => 'user',
                'phone' => '1818183',
                'points' => 30,
                'password' => bcrypt('391093029')
            ],
            [
                'name' => 'Test User 5',
                'email' => 'testuser5@greenact.com',
                'type' => 'user',
                'phone' => '18918913',
                'points' => 60,
                'password' => bcrypt('89183918313')
            ],
            [
                'name' => 'Test User 6',
                'email' => 'testuser6@greenact.com',
                'type' => 'user',
                'phone' => '2823801313',
                'points' => 60,
                'password' => bcrypt('101831033')
            ],
            [
                'name' => 'Test User 7',
                'email' => 'testuser7@greenact.com',
                'type' => 'user',
                'phone' => '282048204',
                'points' => 40,
                'password' => bcrypt('1830183013')
            ],
            [
                'name' => 'Test User 8',
                'email' => 'testuser8@greenact.com',
                'type' => 'user',
                'phone' => '183913193',
                'points' => 90,
                'password' => bcrypt('18318301381')
            ],
            [
                'name' => 'Test User 9',
                'email' => 'testuser9@greenact.com',
                'type' => 'user',
                'phone' => '20208139183',
                'points' => 90,
                'password' => bcrypt('18310830138')
            ],
            [
                'name' => 'Test User 10',
                'email' => 'testuser10@greenact.com',
                'type' => 'user',
                'phone' => '181083108313',
                'points' => 90,
                'password' => bcrypt('181812912')
            ]


        ];

        foreach ($user as $key => $value) {
            User::create($value);
        }
    }
}
