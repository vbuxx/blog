<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = [
        'name',
        'user_id'
    ];


    public function articles()
    {
        return $this->hasMany(Article::class);
    }
    public function user()
    {
        return $this->belongsTo(Article::class);
    }
}
