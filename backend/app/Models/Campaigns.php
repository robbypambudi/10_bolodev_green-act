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

        'user_id'
    ];

    protected $table = 'campaigns';

    protected $casts = [
        'category' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
