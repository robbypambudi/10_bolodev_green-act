<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserCampaigns extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'campaign_id',

        'status'
    ];

    // Hiden
    protected $hidden = [
        'user_id',
        'campaign_id',
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function campaign()
    {
        return $this->belongsTo(Campaigns::class);
    }
}
