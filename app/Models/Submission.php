<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    protected $fillable = [
        'user_id',
        'template_id',
        'values',
        'status'
    ];

    protected function casts(): array
    {
        return [
            'values' => 'array',
            // 'status' => SubmissionStatusEnum::class,
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function template()
    {
        return $this->belongsTo(Template::class);
    }
}
