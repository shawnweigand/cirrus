<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    protected $fillable = [
        'name',
        'description',
        'category',
        'source',
        'version',
        'form',
        'is_active',
        'organization_id'
    ];

    protected function casts(): array
    {
        return [
            'form' => 'array',
            'source'
        ];
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
}
