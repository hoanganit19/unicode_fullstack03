<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Phone extends Model
{
    use HasFactory;
    protected $table = 'phones';
    protected $fillable = ['value'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
