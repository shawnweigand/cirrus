<?php

namespace App\Services\Form;

use App\Data\Form\FieldData;
use App\Data\Form\TextFieldData;
use App\Utils\Form\TextField;

class FieldBuilderService
{
    public static function make(object $field): FieldData
    {
        return match ($field->type) {
            'text' => TextFieldData::from((new TextField($field))->toArray()),
            # need to update [] to have mock values
            default => FieldData::from([])
        };
    }
}
