<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $fillable = [
        'slug',
        'name'
    ];

    protected function casts(): array
    {
        return [];
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'organization_user');
    }

    public function templates()
    {
        return $this->hasMany(Template::class);
    }
}
