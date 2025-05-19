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
        ?string $condition = "true",
        ?bool $inCode = true,
        public ?string $default = null,
    ) {
        parent::__construct($id, $type, $label, $description, $validation, $condition, $inCode);
    }
}
