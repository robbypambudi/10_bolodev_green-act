<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaigns extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'expiry_date',
        'reward_points',
        'participants',
        'category',
    ];

    protected $table = 'campaigns';

    protected $casts = [
        'category' => 'array',
    ];
}
