<?php

namespace App\Casts\Template;

use App\Data\Form\FieldData;
use App\Services\Form\FieldBuilderService;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

class FormCast implements CastsAttributes
{
    /**
     * Cast the given value.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        $fields = collect(json_decode($value))->map(function ($field) {
            return FieldBuilderService::make($field);
        });

        return FieldData::collect($fields);
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        return $value;
    }
}
