<?php

namespace App\Models;

use App\Casts\Template\FormCast;
use App\Enums\Template\TemplateCategoryEnum;
use App\Enums\Template\TemplateKindEnum;
use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    protected $fillable = [
        'slug',
        'name',
        'description',
        'category',
        'kind',
        'source',
        'version',
        'form',
        'is_active',
        'organization_id'
    ];

    protected function casts(): array
    {
        return [
            'form' => FormCast::class,
            'category' => TemplateCategoryEnum::class,
            'kind' => TemplateKindEnum::class,
        ];
    }

    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
}
