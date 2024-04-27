<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserEvents extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'event_id',
        'is_completed',
        'is_attending',

        'latitude_attending',
        'longitude_attending',

        'latitude_completed',
        'longitude_completed',
    ];

    public function event()
    {
        return $this->belongsTo(Events::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
