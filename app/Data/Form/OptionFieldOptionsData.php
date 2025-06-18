<?php

namespace App\Data\Form;

use Spatie\LaravelData\Data;

class OptionFieldOptionsData extends Data
{
    public function __construct(
        public string $label,
        public string $value
    ) {}
}
