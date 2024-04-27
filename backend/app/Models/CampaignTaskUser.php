<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CampaignTaskUser extends Model
{
    use HasFactory;

    protected $fillable = [
        'campaign_task_id',
        'user_id',

        'status',
        'proof',
    ];

    protected $table = 'campaign_task_user';

    public function campaignTask()
    {
        return $this->belongsTo(CampaignTask::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
