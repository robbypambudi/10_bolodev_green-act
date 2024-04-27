<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VoucherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $vouchers = [
            [
                'code' => 'VOUCHER1',
                'discount' => 10,
                'minimum_points' => 100,
                'expiry_date' => now()->addDays(30),
                'description' => 'Voucher 1 description',
                'status' => 'active',
            ],
            [
                'code' => 'VOUCHER2',
                'discount' => 20,
                'minimum_points' => 200,
                'expiry_date' => now()->addDays(60),
                'description' => 'Voucher 2 description',
                'status' => 'active',
            ],
            [
                'code' => 'VOUCHER3',
                'discount' => 30,
                'minimum_points' => 300,
                'expiry_date' => now()->addDays(90),
                'description' => 'Voucher 3 description',
                'status' => 'active',
            ],
        ];

        foreach ($vouchers as $voucher) {
            \App\Models\Voucher::create($voucher);
        }
    }
}
