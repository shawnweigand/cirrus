<?php

namespace App\Data\Form;

class TextFieldData extends FieldData
{
    public function __construct(
        string $id,
        string $label,
        string $description,
        ?string $default = null,
        ?array $validation = [],
        ?string $condition = "true",
        ?bool $inCode = true,
    ) {
        parent::__construct($id, 'text', $label, $description, $default, $validation, $condition, $inCode);
    }
}
