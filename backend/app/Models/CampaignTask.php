<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CampaignTask extends Model
{
    use HasFactory;

    protected $fillable = [
        'campaign_id',
        'title',
        'description',
    ];

    protected $table = 'campaign_tasks';

    public function campaign()
    {
        return $this->belongsTo(Campaigns::class);
    }
}
