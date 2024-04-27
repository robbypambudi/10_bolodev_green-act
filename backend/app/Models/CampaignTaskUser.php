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

    public function campaignTask()
    {
        return $this->belongsTo(CampaignTask::class);
    }
}
