<?php

namespace App\Data\Form;

class TextFieldData extends FieldData
{
    public function __construct(
        string $id,
        string $type,
        string $label,
        string $description,
        ?array $validation = [],
        ?string $condition = null,
        public ?string $default = '',
    ) {
        parent::__construct($id, $type, $label, $description, $validation, $condition);
    }
}
