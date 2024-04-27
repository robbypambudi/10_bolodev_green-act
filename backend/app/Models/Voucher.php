<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'discount',
        'description',
        'expiry_date',
        'minimum_points',
        'status',
    ];
    protected $table = 'vouchers';


    protected $casts = [
        'expiry_date' => 'datetime',
    ];

    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    public function scopeExpired($query)
    {
        return $query->where('status', 'expired');
    }
}
