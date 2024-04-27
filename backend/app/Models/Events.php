<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image',
        'quota',

        'start_date',
        'end_date',

        'longitude',
        'latitude',

        'category',

        'participants',

        'reward_points',
    ];

    protected $casts = [
        'category' => 'array',
    ];
}
