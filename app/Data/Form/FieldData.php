<?php

namespace App\Data\Form;

use Spatie\LaravelData\Data;

class FieldData extends Data
{
    public function __construct(
        public string $id,
        public string $type,
        public string $label,
        public string $description,
        public ?array $validation = [],
        public ?string $condition = null,
    ) {}
}
