<?php

namespace App\Data\Form;

class MultiFieldData extends FieldData
{
    /**
     * @param Option[] $options
     */
    public function __construct(
        string $id,
        string $label,
        string $description,
        public ?array $options = [],
        ?string $default = null,
        ?array $validation = [],
        ?string $condition = "true",
        ?bool $inCode = true,
    ) {
        parent::__construct($id, 'option', $label, $description, $default, $validation, $condition, $inCode);
    }
}
